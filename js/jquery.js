// JS
var url = document.querySelector("link[rel=\'canonical\']");
var hostname = window.location.hostname;
var domain = "http://www.thevocket.com";

if ( url !== null ) {
    url = document.querySelector("link[rel=\'canonical\']").getAttribute("href");
}

if ( url === undefined || url === null ) {
    url = "http://www.thevocket.com";
}

if ( domain.indexOf( hostname ) < 0 ) {
    window.stop();
    // console.log( domain.indexOf( hostname ) );
    window.location = url;
}
