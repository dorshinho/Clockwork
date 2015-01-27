window.onload = app;

// runs when the DOM is loaded
function app(){
    "use strict";

    // load some scripts (uses promises :D)
    loader.load(
        //css
        {url: "./dist/style.css"},
        //js
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"}
        // {url: "./bower_components/backbone/backbone.js"}
    ).then(function(){
        document.querySelector("html").style.opacity = 1;
        // start app?
    })

var h1s = [].slice.call(document.querySelectorAll('h1'));


setInterval(function(){
    var d = new Date();

    var parts = [d.getHours(), d.getMinutes(), d.getSeconds()]

    h1s.forEach(function(el){
        el.innerHTML = parts.join(":")
    })
    //Write a function that will make sure any number less than "10" has a zero before it.
    // for (var i = 0; i < Things.length; i++) {
    //     Things[i]
    // };

         document.getElementById("backdrop").style.backgroundColor = "rgb(" + Math.floor((d.getHours() / .0705)) + ", " + Math.floor((d.getMinutes() / .387)) + ", " + Math.floor((d.getSeconds() / .255)) + ")";

}, 1*1000)

}
