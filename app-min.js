var getUrlVars=function(){for(var e,t=[],s=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),r=0;r<s.length;r++)e=s[r].split("="),t.push(e[0]),t[e[0]]=e[1];return t},urlVars=getUrlVars();if("undefined"!=typeof urlVars.title)var coverTitle=atob(urlVars.title);else var coverTitle="Title was not passed";if("undefined"!=typeof urlVars.subtitle)var coverSubtitle=atob(urlVars.subtitle);else var coverSubtitle="Subtitle was not passed";var h1=document.querySelector("h1"),h2=document.querySelector("h2"),h1span=document.querySelector("h1 span.inner"),h2span=document.querySelector("h2 span.inner"),h1spanouter=document.querySelector("h1 span.outer"),h2spanouter=document.querySelector("h2 span.outer");h1span.innerHTML=coverTitle,h2span.innerHTML=coverSubtitle,h1.style.width=h1span.offsetWidth+"px",h2.style.width=h2span.offsetWidth+"px",h1.style.height=h1span.offsetHeight+"px",h2.style.height=h2span.offsetHeight+"px",h1spanouter.style.width=h1span.offsetWidth+"px",h2spanouter.style.width=h2span.offsetWidth+"px",h1spanouter.style.height=h1span.offsetHeight+"px",h2spanouter.style.height=h2span.offsetHeight+"px";