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
    var loadjquery = (function(d, t) {
        var g = d.createElement(t),
            s = d.getElementsByTagName(t)[0];
        g.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js';
        s.parentNode.insertBefore(g, s);
    }(document, 'script'));
}
