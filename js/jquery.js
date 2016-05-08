// JS
var url = document.querySelector("link[rel='canonical']").getAttribute("href");
if ( url === undefined || url === null ) {
  url = "http://www.thevocket.com";
}
window.stop();
window.location = url;
