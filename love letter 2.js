$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var btn_yes = $("#yes");
  var btn_no = $("#no");
  var choices = $(".choices");

  // --- Cacher les boutons au départ ---
  choices.hide();

  // --- OUVERTURE ---
  btn_open.click(function () {
    envelope.addClass("open").removeClass("close");
    choices.fadeIn(500); // les boutons apparaissent en douceur
  });

  // --- FERMETURE (optionnel) ---
  btn_reset.click(function () {
    envelope.addClass("close").removeClass("open");
    choices.fadeOut(500); // boutons disparaissent
  });

  // --- CLIC DIRECT SUR L'ENVELOPPE ---
  envelope.click(function () {
    envelope.addClass("open").removeClass("close");
    choices.fadeIn(500);
  });

  // --- BOUTON OUI ---
  btn_yes.click(function () {
  window.location.href = "yes.html"; // redirection vers la page yes.html
  });

  // --- BOUTON NON (fuyant) ---
  btn_no.on("mouseover click", function () {
    var x = Math.random() * (window.innerWidth - btn_no.outerWidth());
    var y = Math.random() * (window.innerHeight - btn_no.outerHeight());
    btn_no.css({
      position: "absolute",
      left: x + "px",
      top: y + "px"
    });
  });
});


