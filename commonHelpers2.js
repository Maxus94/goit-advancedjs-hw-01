import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const t=document.querySelector("iframe"),e=new Vimeo.Player(t);e.on("play",function(){console.log("played the video!")});e.getVideoTitle().then(function(o){console.log("title:",o)});e.on("timeupdate",n);function n(){console.log(e.getCurrentTime())}let l=e.getCurrentTime();console.log(l.Result);
//# sourceMappingURL=commonHelpers2.js.map
