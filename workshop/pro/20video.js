
var main = document.getElementsByTagName('main');
if (main) if (main.length > 0) main = main[0];
if (main) {
    var fullscreen = '<p><input type="button" value="F11(window - screen)" onclick="toggleFullscreen(main);"></p>';
    main.innerHTML = '<h1></h1>' + fullscreen;
}

var count = videoIds.length;

var h1 = document.getElementsByTagName('h1');
if (h1) if (h1.length > 0) h1 = h1[0];

if (main) videoIds.forEach(insertVideo);


function insertVideo(id, index) {
    var ins = function () {
        h1.innerText = (index + 1).toString() + '/' + count.toString() + ' videos ';
        var src = 'https://youtube.com/embed/' + id +
            '?autoplay=1' +
            '&playlist=' + id +
            '&mute=1' +
            '&loop=1' +
            '&controls=0';
        var par = document.createElement('p');
        par.className = "left";
        par.innerHTML = '<iframe allowfullscreen frameborder="10" width="230" height="200" src="' + src + '"></iframe>';
        main.appendChild(par);
    }
    setTimeout(ins, 1000 * index);
}


function toggleFullscreen(e) {
    if (document.fullscreenElement) document.exitFullscreen();
    else if (e.requestFullscreen) e.requestFullscreen();
    h1.innerText = '';
}