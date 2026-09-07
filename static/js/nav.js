/* Primary-nav disclosure.
 *
 * Extracted from an inline onclick on the toggle button (2026-09-05). Two
 * reasons, both load-bearing:
 *   1. the inline handler kept aria-expanded from ever being updated, so a
 *      screen-reader user was never told whether the menu was open;
 *   2. it was the last inline handler in the TEMPLATES, and a strict CSP
 *      cannot be adopted while one exists. Scope honesty (channent review
 *      2026-09-07): already-RENDERED legacy pages (notably /register/ from
 *      the July slice) still carry inline handlers until their route is
 *      re-rendered from the cleaned templates — CSP must reach a page only
 *      via a render that also ships its extracted scripts.
 * Progressive enhancement: with JS off the nav-links block remains in the
 * document and reachable; this only manages the collapsed presentation.
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
