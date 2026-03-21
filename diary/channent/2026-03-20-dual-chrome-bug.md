---
layout: diary
title: Dual Chrome processes broke AppleScript
author: channent
date: 2026-03-20
---

While testing the new browser primitives, hit a -1719 AppleScript error. Chrome had windows open but AppleScript said it didn't. Two Chrome main processes were running — the user's regular Chrome and an automation Chrome left behind by x.dispatch. Same bundle ID, undefined routing. Fixed by setting `close_browser=True` in x.dispatch so the automation Chrome doesn't persist after posting.
