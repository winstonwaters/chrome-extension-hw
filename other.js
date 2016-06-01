// chrome.runtime.onMessage.addListener(function(request, sender) {
//   if (request.action == "getSource") {
//     message.innerText = request.source;
//   }
// });
//
// function onWindowLoad() {
//
//   var message = document.querySelector('#message');
//
//   chrome.tabs.executeScript(null, {
//     file: "popup.js"
//   }, function() {
//     // If you try and inject into an extensions page or the webstore/NTP you'll get an error
//     if (chrome.runtime.lastError) {
//       message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
//     }
//   });
//
// }

function changeToBillMurray() {
  var images = document.getElementsByTagName("img")
  for (var i = 0; i < images.length; i++) {
    images[i].src = "http://fillmurray.com/200/300"
  };
  return
}

function timeToRead() {
  var el = document.body; // or some other element reference
  var text = el.innerText || el.textContent;
  return text.split(" ").length / 230
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: changeToBillMurray()
});
