!function(){var t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=null;t.start.addEventListener("click",(function(){e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.start.setAttribute("disabled",!0)})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.47d05fe7.js.map
