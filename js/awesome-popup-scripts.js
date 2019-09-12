var pocetVyskytuButton = document.getElementsByClassName("popup-button").length;
var popupWindowNumber = document.querySelectorAll(".popup-window").length;

for (let o = 1; o <= popupWindowNumber; o++) {
  var cross = document.getElementById("cross");
  var popupBackground = document.getElementById("popup-background");
  var giveMe = document.getElementById("give-me-popup");
  var popupWindow = document.getElementById("popup-window");

  function reply_click(clicked_id) {
    var lastCharButton = clicked_id.substr(clicked_id.length - 1);

    var prirazenyBackground = document.getElementById(
      "popup-background-" + lastCharButton
    );
    var prirazenyPopup = document.getElementById(
      "popup-window-" + lastCharButton
    );
    var prirazenyCross = document.getElementById("cross-" + lastCharButton);

    vytvorPopup(prirazenyPopup, prirazenyBackground);

    prirazenyCross.addEventListener(
      "click",
      zavriPopup(prirazenyPopup, prirazenyBackground)
    );
    prirazenyBackground.addEventListener(
      "click",
      zavriPopup(prirazenyPopup, prirazenyBackground)
    );
  }
  if (giveMe || popupWindow) {
    giveMe ? giveMe.setAttribute("id", "give-me-popup-" + o) : null;
    popupWindow.setAttribute("id", "popup-window-" + o);
    popupBackground.setAttribute("id", "popup-background-" + o);
    cross.setAttribute("id", "cross-" + o);
  }
}

if (document.querySelector(".wpcf7")) {
  document.querySelector(".wpcf7").addEventListener(
    "wpcf7submit",
    function() {
      document.querySelector(".wpcf7-submit").removeAttribute("disabled", "");
      document
        .querySelector(".wpcf7-submit")
        .classList.remove("disable-submit");
    },
    false
  );
}

function vytvorPopup(popup, background) {
  background.classList.add("darkness");
  background.classList.remove("lightness");
  popup.classList.add("swift");
  popup.classList.remove("swift2");
  //vypnutí scrollu na stránce v pozadí
  document.body.style.overflow = "hidden";
  //iOS scroll off
  document.body.classList.add("body-fixed");

  function vypniSubmit() {
    setTimeout(function() {
      document.querySelector(".wpcf7-submit").setAttribute("disabled", "");
    }, 1);
    document.querySelector(".wpcf7-submit").classList.add("disable-submit");
  }
  if (document.querySelector(".wpcf7")) {
    document
      .querySelector(".wpcf7-submit")
      .addEventListener("click", vypniSubmit);
  }
}

if (window.location.href.includes("popup-")) {
  const url = window.location.href;

  let indexPopupu = url.indexOf('popup');
  let IDPopupu = url.substr(indexPopupu + 6, 1);

  let popupWindow = document.querySelector(`#popup-window-${IDPopupu}`)
  let popupBackground = document.querySelector(`#popup-background-${IDPopupu}`)
  let popupCross = document.querySelector(`#cross-${IDPopupu}`)

  vytvorPopup(popupWindow, popupBackground);

  popupCross.addEventListener(
    "click",
    zavriPopup(popupWindow, popupBackground)
  );
  popupBackground.addEventListener(
    "click",
    zavriPopup(popupWindow, popupBackground)
  );
}

function zavriPopup(popup, background) {
  return function() {
    popup.classList.remove("swift");
    popup.classList.add("swift2");
    background.classList.add("lightness");
    background.classList.remove("darkness");
    //počkej až skončí animace, poté odstran classy - skryje se popupBackground i popupWindow, interval = délce animace
    setTimeout(function() {
      popup.classList.remove("swift2");
      background.classList.remove("lightness");
      //zapnutí scrollu na stránce v pozadí
      document.body.style.overflow = "auto";
      //iOS scroll off
      document.body.classList.remove("body-fixed");
    }, 250);
  };
}
