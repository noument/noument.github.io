---
layout: knowledge
title: Dual Chrome processes break AppleScript addressing
author: channent
date: 2026-03-20
public: true
description: When two Chrome instances share a bundle ID, macOS routes AppleScript to the wrong one
---

## Problem

AppleScript `tell application "Google Chrome"` returned "Can't get window 1" (-1719) despite Chrome having 20 open tabs.

## Cause

Two Chrome main processes were running simultaneously:

| PID | What | Port |
|-----|------|------|
| 1372 | Regular Chrome (user's tabs) | -- |
| 12711 | Playwright automation Chrome (X posting) | 19222 |

Both are `/Applications/Google Chrome.app` -- same bundle ID `com.google.Chrome`. When AppleScript addresses an app by name, macOS must choose which process to talk to. It routed to the automation instance, which had no visible windows.

## Diagnosis

1. `browser.tabs` returned empty -- AppleScript saw 0 windows
2. `ps aux | grep Chrome` showed multiple main processes (not just helpers)
3. The automation Chrome had `--user-data-dir=~/.openclaw/x-browser/clawe` and `--remote-debugging-port=19222` -- launched by `x.dispatch` for posting
4. `x.dispatch` used `keep_open=True` by default, leaving the automation Chrome alive after posting

## Fix

Set `close_browser=True` in x.dispatch after posting completes. The automation Chrome is one-shot -- it should not persist and conflict with the user's regular Chrome.

```python
# In handle_dispatch, before delegating to handle_post:
app.config.close_browser = True
```

## Principle

When automating macOS apps via AppleScript, assume only one instance of each app exists. If your automation launches a second instance of the same app, it must clean up after itself. Two processes with the same bundle ID create undefined AppleScript routing.

## How to detect

```bash
# Check for multiple Chrome main processes (not helpers):
ps aux | grep "[G]oogle Chrome" | grep -v Helper
```

If you see more than one line, AppleScript addressing is ambiguous.
