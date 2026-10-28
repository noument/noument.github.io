/* Primary-nav disclosure.
 *
 * Extracted from an inline onclick on the toggle button (2026-09-05). Two
 * reasons, both load-bearing:
 *   1. the inline handler kept aria-expanded from ever being updated, so a
 *      screen-reader user was never told whether the menu was open;
 *   2. it was the last inline handler in the templates, and a strict CSP
 *      cannot be adopted while one exists.
 * Progressive enhancement: with JS off the nav-links block remains in the
 * document and, at 900px and below where the stylesheet collapses it behind
 * the toggle, a <noscript> rule in base.html shows the links inline — so the
 * nav is reachable without this script; this only manages the collapsed
 * presentation when the script runs.
 */
(function () {
  "use strict";
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (!toggle || !nav) { return; }
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

/* Release identity (T9128), after adament's TCH Release.gd: the page says which build it is and where it runs.
 *
 * The identity is the site stamp, served as /version.json (lib/stamp.py: site, version, updated_at, checksum).
 * It is read at runtime and never baked into the HTML, so a publication changes version.json alone, not every
 * page. 'local preview' on 127.0.0.1 or localhost keeps the preview from being mistaken for nouments.com. A stamp
 * that does not hold is never guessed: the footer says 'version unavailable'.
 */
/* T9182 (the operator, 2026-10-21): three marks, because a new function or structure is not a content update.
 * 'v<MAJOR.MINOR>' moves only by the site owner's release decision; 'build <n>' moves with every publication; the
 * time is the last update, to the minute, in UTC. A v1 stamp (an integer that counted publications, before T9182)
 * reads as the build it counted, with no version invented for it.
 */
(function () {
  "use strict";
  function isCount(n) { return typeof n === "number" && n >= 1 && n % 1 === 0; }
  function releaseLabel(stamp, host) {
    var h = String(host || "");
    var where = (h === "localhost" || /^127\./.test(h)) ? "local preview" : h;
    var at = String((stamp && stamp.updated_at) || "");
    var ok = stamp && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(at) &&
      String(stamp.checksum || "").indexOf("sha256:") === 0;
    var v2 = ok && "build" in stamp && isCount(stamp.build) && typeof stamp.version === "string" &&
      /^(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(stamp.version);
    var v1 = ok && !("build" in stamp) && isCount(stamp.version);
    if (!v2 && !v1) { return "version unavailable · " + where; }
    var when = at.slice(0, 10) + " " + at.slice(11, 16) + " UTC";
    if (v1) { return "build " + stamp.version + " · " + when + " · " + where; }
    return "v" + stamp.version + " · build " + stamp.build + " · " + when + " · " + where;
  }
  if (typeof module !== "undefined" && module.exports) { module.exports.releaseLabel = releaseLabel; return; }
  var footer = document.querySelector(".site-footer .footer-left");
  if (!footer || !window.fetch) { return; }
  var me = document.currentScript && document.currentScript.src ? document.currentScript.src : "";
  var base = me ? me.replace(/\/static\/js\/nav\.js(\?.*)?$/, "") : "";
  var span = document.createElement("span");
  span.className = "site-release";
  footer.appendChild(span);
  window.fetch(base + "/version.json", {cache: "no-store"})
    .then(function (r) { return r.ok ? r.json() : null; })
    .catch(function () { return null; })
    .then(function (stamp) { span.textContent = " · " + releaseLabel(stamp, window.location.hostname); });
})();
