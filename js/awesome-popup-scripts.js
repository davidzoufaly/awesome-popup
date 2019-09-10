  var pocetVyskytuButton = document.getElementsByClassName('popup-button').length;
  var popupWindowNumber = document.querySelectorAll(".popup-window").length;
  

  for (let o = 1; o <= popupWindowNumber; o++) {
    var cross = document.getElementById("cross");
    var popupBackground = document.getElementById("popup-background");
    var giveMe = document.getElementById("give-me-popup");
    var popupWindow = document.getElementById("popup-window");

  function reply_click(clicked_id){
    var lastCharButton = clicked_id.substr(clicked_id.length - 1);

    var prirazenyBackground = document.getElementById("popup-background-" + lastCharButton);
    var prirazenyPopup = document.getElementById("popup-window-" + lastCharButton);
    var prirazenyCross = document.getElementById("cross-" + lastCharButton);

    vytvorPopup();

    function vytvorPopup() {
      prirazenyBackground.classList.add("darkness");
      prirazenyBackground.classList.remove("lightness");
      prirazenyPopup.classList.add("swift");
      prirazenyPopup.classList.remove("swift2");
      //vypnutí scrollu na stránce v pozadí
      document.body.style.overflow = "hidden";
      //iOS scroll off
      document.body.classList.add("body-fixed");

      function vypniSubmit() {
        setTimeout(function dd() {
        document.querySelector('.wpcf7-submit').setAttribute("disabled", "")},1);
        document.querySelector('.wpcf7-submit').classList.add("disable-submit");
          }
          document.querySelector('.wpcf7-submit').addEventListener("click", vypniSubmit, false);

          var wpcf7Elm = document.querySelector( '.wpcf7' );

          //not working
          wpcf7Elm.addEventListener('wpcf7submit' || 'wpcf7spam' || 'wpcf7mailfailed' || 'wpcf7mailsent' || 'wpcf7invalid', function( event ) {

          document.querySelector('.wpcf7-submit').removeAttribute("disabled", "");
          document.querySelector('.wpcf7-submit').classList.remove("disable-submit");

      }, false );
    };

    function zavriPopup() {
      prirazenyPopup.classList.remove("swift");
      prirazenyPopup.classList.add("swift2");
      prirazenyBackground.classList.add("lightness");
      prirazenyBackground.classList.remove("darkness");
      //počkej až skončí animace, poté odstran classy - skryje se popupBackground i popupWindow, interval = délce animace
      var myInterval = setTimeout(function(){
        prirazenyPopup.classList.remove("swift2");
        prirazenyBackground.classList.remove("lightness");
      //zapnutí scrollu na stránce v pozadí
      document.body.style.overflow = "auto";
      //iOS scroll off
      document.body.classList.remove("body-fixed");
    }, 250);
    };

    prirazenyCross.addEventListener("click", zavriPopup);
    prirazenyBackground.addEventListener("click", zavriPopup);
  }
    if(giveMe || popupWindow) {
      giveMe ? giveMe.setAttribute("id", "give-me-popup-" + o) : null;
      popupWindow.setAttribute("id", "popup-window-" + o);
      popupBackground.setAttribute("id", "popup-background-" + o);
      cross.setAttribute("id", "cross-" + o);
    }
    }
