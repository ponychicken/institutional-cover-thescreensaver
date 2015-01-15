var h1 = document.querySelector('h1');
var h2 = document.querySelector('h2');

var h1span = document.querySelector('h1 span');
var h2span = document.querySelector('h2 span');

h1span.innerText = coverTitle;
h2span.innerText = coverSubtitle;

h1.style.width = h1span.offsetWidth + 'px';
h2.style.width = h2span.offsetWidth + 'px';
h1.style.height = h1span.offsetHeight + 'px';
h2.style.height = h2span.offsetHeight + 'px';
