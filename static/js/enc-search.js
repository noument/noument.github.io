/* Encyclopedia search (T7456, N7823 AG6).
   Filters the entry cards already on /encyclopedia/ by the words typed: every word must appear in a card.
   No network, no storage, no inline script (the page CSP is script-src 'self'). */
(function () {
  "use strict";
  var input = document.getElementById("enc-search");
  if (!input) {
    return;
  }
  var cards = Array.prototype.slice.call(document.querySelectorAll("article.encyclopedia-card"));
  var texts = cards.map(function (card) {
    return (card.textContent || "").toLowerCase();
  });
  var status = document.getElementById("enc-search-status");

  function apply() {
    var terms = input.value.toLowerCase().split(/\s+/).filter(Boolean);
    var shown = 0;
    cards.forEach(function (card, i) {
      var hit = terms.every(function (term) {
        return texts[i].indexOf(term) !== -1;
      });
      card.hidden = !hit;
      if (hit) {
        shown += 1;
      }
    });
    if (status) {
      status.textContent = terms.length ? shown + " of " + cards.length + " entries" : "";
    }
  }

  input.addEventListener("input", apply);
})();
