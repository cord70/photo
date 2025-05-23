
var main = document.getElementsByTagName('main');
if (main) if (main.length > 0) main = main[0];
if (main) {
    var fullscreen = '<p><input type="button" value="F11(window - screen)" onclick="toggleFullscreen(main);"></p>';
    main.innerHTML = '<h1></h1>' + fullscreen;
}

var count = videoSrc.length;

var h1 = document.getElementsByTagName('h1');
if (h1) if (h1.length > 0) h1 = h1[0];

if (main) videoSrc.forEach(insertVideo);


function insertVideo(id, index) {
    var ins = function () {
        h1.innerText = (index + 1).toString() + '/' + count.toString() + ' video mp4';
        var source = '<source src="' + id + '"   type="video/mp4">';
        var par = document.createElement('span');
        par.className = "left";
        // старые броузеры не понимают тег video это html5 
        par.innerHTML = '<video controls autoplay loop muted width="180" height="180">' + source + '</video>';
        main.appendChild(par);
    }
    setTimeout(ins, 1000 * index);
}


function toggleFullscreen(e) {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (e.requestFullscreen) e.requestFullscreen();
    h1.innerText = '';
}

