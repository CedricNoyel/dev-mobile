(function () {
  "use strict";

  if (!("serviceWorker" in navigator)) {
    console.log("Service worker non supporté");
    return;
  }
  navigator.serviceWorker
    .register("sw.js")
    .then(() => {
      console.log("Service worker enregistré");
    })
    .catch((error) => {
      console.log("Erreur lors de l'enregistrement du service worker");
    });
})();

// recevoir des messages du service worker
navigator.serviceWorker.onmessage = function (event) {
  console.log("Reçu du SW : ", event.data);
};

// envoyer un message au service worker
if (navigator.serviceWorker.controller) {
  navigator.serviceWorker.controller.postMessage({
    command: "MISE_A_JOUR",
    message: "Hello je suis un client",
  });
}
