console.log("entered load mathjax javascript file");


window.onload = function()
{
    setTimeout(function()
    {
        var head = document.getElementsByTagName("head")[0],
            script;
        script = document.createElement("script");
        script.type = "text/x-mathjax-config";
        script[(window.opera ? "innerHTML" : "text")] =
            "MathJax.Hub.Config({\n" +
            "  extensions: [\"tex2jax.js\"], jax: [\"input/TeX\", \"output/HTML-CSS\"], tex2jax: { inlineMath: [ ['$','$'] ], displayMath: [ ['$$','$$']], processEscapes: true }, \"HTML-CSS\": { availableFonts: [\"TeX\"] } \n" +
            "});"
        head.appendChild(script);
        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML";
        head.appendChild(script);
    }, 2000)
}
