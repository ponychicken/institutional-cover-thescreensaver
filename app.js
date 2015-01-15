var getUrlVars = function() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
};

var urlVars = getUrlVars();
if (typeof urlVars.title !== 'undefined') {
  var coverTitle = atob(urlVars.title);
} else {
  var coverTitle = 'Title was not passed';
}

if (typeof urlVars.subtitle !== 'undefined') {
  var coverSubtitle = atob(urlVars.subtitle);
} else {
  var coverSubtitle = 'Subtitle was not passed';
}

if (window.navigator.userAgent.indexOf('MSIE') != -1) {
  document.querySelector('body').classList.add('ie');
}


var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');

var h1span = document.querySelector('h1 span.inner');
var h2span = document.querySelector('h2 span.inner');

var h1spanouter = document.querySelector('h1 span.outer');
var h2spanouter = document.querySelector('h2 span.outer');

h1span.innerHTML = coverTitle;
h2span.innerHTML = coverSubtitle;

h1.style.width = h1span.offsetWidth + 'px';
h2.style.width = h2span.offsetWidth + 'px';
h1.style.height = h1span.offsetHeight + 'px';
h2.style.height = h2span.offsetHeight + 'px';

h1spanouter.style.width = h1span.offsetWidth + 'px';
h2spanouter.style.width = h2span.offsetWidth + 'px';
h1spanouter.style.height = h1span.offsetHeight + 'px';
h2spanouter.style.height = h2span.offsetHeight + 'px';
