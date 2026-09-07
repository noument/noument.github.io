/* Registration intake — structured mailto composer.
 *
 * Externalised from an inline <script> in register.html (2026-09-05). The site
 * has no backend by deliberate decision (J012 DOC001 refused a public POST
 * endpoint the collective cannot harden), so this composes a structured draft
 * in the visitor's own mail client. Moving it out of the document is what
 * makes a strict Content-Security-Policy adoptable: with it inline, any CSP
 * had to carry 'unsafe-inline' for scripts, which is most of the protection
 * given away.
 *
 * The address comes from data-address on the form, rendered server-side, so
 * the contact point stays a template variable rather than a literal in a
 * cacheable asset.
 */
(function () {
  var form = document.getElementById("registration-form");
  if (!form) return;
  var status = document.getElementById("registration-status");

  function field(name) {
    var item = form.elements[name];
    return item && item.value ? item.value.trim() : "";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.elements.consent.checked) {
      status.textContent = "Consent is required before a registration draft can be prepared.";
      return;
    }

    var body = [
      "NOUMENTS registration request",
      "",
      "Name or handle: " + field("identity"),
      "Reach channel: " + field("reach_channel"),
      "Reach handle or address: " + field("reach_handle"),
      "Request class: " + field("request_class"),
      "",
      "Intent:",
      field("intent"),
      "",
      "Consent: yes",
      "Boundary understood: this is a reviewed registration request, not a live service execution."
    ].join("\n");

    window.location.href = "mailto:" + form.dataset.address +
      "?subject=" + encodeURIComponent("NOUMENTS registration request") +
      "&body=" + encodeURIComponent(body);
    status.textContent = "A prepared email draft should now be open. Review it before sending.";
  });
})();
