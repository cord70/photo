// cord70.github.io/photo

var updated = ['/sw.js'];

var cacheName = 'pwa_v1'; // нужно менять имя при смене контента сайта

var filesToCache = [
// home page
    '/index.html',

// home page head
    '/images/ansimeta.js',
    '/images/photohome.png',
    '/nav.js',
    '/images/main.css',
    '/images/sky.jpg',
    '/manifest.json',
    '/favicon512.png',
    '/apple-touch-icon.png',
    '/favicon.ico',
    '/favicon.svg',

// home page href
    '/photo/index.html',
    '/photo/insect/centipede.html',
    '/photo/insect/mosquito-enlarged.html',
    '/photo/insect/bombylius-major.html',
    '/photo/plant/maple-leaflet.html',
    '/workshop/index.html',
    '/workshop/accu-capacity.html',
    '/workshop/rubik.html',
    '/workshop/internal-resistance.html',
    '/workshop/fish_home.html',
    '/photo/red-sea-fish/index.html',
    '/photo/underwater/index.html',
    '/photo/red-sea-fish/triggerfish/picasso-yellow.html',
    '/photo/underwater/sea-cucumber.html',
    '/photo/red-sea-fish/diodon.html',
    '/photo/underwater/christmas-worm-yellow-fire.html',
    '/photo/red-sea/index.html',
    '/photo/red-sea/coral-fossil.html',
    '/photo/red-sea/mosque.html',
    '/photo/red-sea/reef_heron.html',
    '/photo/red-sea/rusty-ship.html',
    '/photo/tank/index.html',
    '/photo/tank/auratus/auratus.html',
    '/photo/tank/kribs.html',
    '/photo/tank/snail_couple.html',
    '/photo/tank/macrognatus/index.html',
    '/photo/crete/index.html',
    '/photo/crete/retsina.html',
    '/photo/crete/plaice_in_sand.html',
    '/photo/crete/greek-door.html',
    '/photo/crete/octopus_swims.html',
    '/txt/poem.html',
    '/txt/omar-retouch.html',
    '/txt/rubayyat.html',
    '/txt/love-me.html',
    '/pagelist.html',

// home page img
    '/photo/insect/200/centipede.jpg',
    '/workshop/200/accumeter2.jpg',
    '/photo/red-sea-fish/butterfly/200/black_yellow.jpg',
    '/photo/red-sea/200/horizon.jpg',
    '/photo/tank/200/pelvicachromis-pair.jpg',
    '/photo/crete/200/greek-door.jpg',
    '/images/song.jpg',
    '/images/home.gif',
];

// Start the service worker and cache all of the app's content 
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// Serve cached content when offline 
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
