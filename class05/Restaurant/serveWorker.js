console.log('Service Worker: Registered');

const cacheFiles = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/img/fork.png'
];

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(fetchResponse => {
                return caches.open(staticCacheName).then(cached => {
                    cache.put(event.request, fetchResponse.clone());
                });
            });   
        })
        .catch(error => {
            if(event.request.url.includes('.jpeg')) {
                return caches.match('/img/fixed/offline_img1.png');
            }
            return new Response('Not connected to the internet', {
                status: 404,
                statusText: 'Not connect to the internet'
            });
        })
    );
});

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll(cacheFiles);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            if (response) {
                console.log('Found ', e.request, ' in cache');
                return response;
            }
            else {
                return fetch(e.request)
                    .then(function(response) {
                        const responseClone = response.clone();
                        caches.open(cacheName).then(function(cache) {
                            cache.put(e.request, responseClone);
                        })
                        return response;
                    })
                    .catch(function(err) {
                        console.error(err);
                    });
            }
        })
    );
});