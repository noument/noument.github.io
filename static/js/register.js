/* Registration intake — structured mailto composer.
 *
 * Externalised from an inline <script> in register.html (2026-09-05). The site
 * has no backend by design, so this composes a structured draft
 * in the visitor's own mail client. Moving it out of the document is what
 * makes a strict Content-Security-Policy adoptable: with it inline, any CSP
 * had to carry 'unsafe-inline' for scripts, which is most of the protection
 * given away.
 *
 * The address comes from data-address on the form so this handler can be an
 * external script: a strict CSP (script-src 'self') is only adoptable once no
 * inline code remains. The site is static; nothing is rendered server-side.
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

    var address = String(form.dataset.address || "");
    /* The address is concatenated into a mailto URL, so the guard admits
       exactly ONE plain recipient: no whitespace, no ? & #, none of the
       RFC 6068 separators , and ;, no escape character %, no quotes or
       angle brackets, and a dotted TLD. It is a literal in our own template,
       so refusal (not encoding) is right — a malformed address is a build
       defect, not user input. */
    if (!/^[^\s?&#,;%"'<>]+@[^\s?&#,;%"'<>]+\.[A-Za-z]{2,}$/.test(address)) {
      status.textContent = "The registration address is misconfigured; please email register@nouments.com directly.";
      return;
    }
    window.location.href = "mailto:" + address +
      "?subject=" + encodeURIComponent("NOUMENTS registration request") +
      "&body=" + encodeURIComponent(body);
    status.textContent = "A prepared email draft should now be open. Review it before sending.";
  });
})();
