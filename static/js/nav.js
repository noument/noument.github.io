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
