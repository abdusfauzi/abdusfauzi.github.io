// JS
var url = document.querySelector("link[rel='canonical']").getAttribute("href");
var hostname = window.location.hostname;

if ( url === undefined || url === null ) {
  url = "http://www.thevocket.com";
}

if ( hostname === 'www.thevocket.com' ) {
  window.stop();
  window.location = url;
}
