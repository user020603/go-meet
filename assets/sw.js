const BASE_URL = self.location.origin;

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        `${BASE_URL}/favicon.ico`,
        `${BASE_URL}/icon.png`,
        `${BASE_URL}/javascript/chat.js`,
        `${BASE_URL}/javascript/peer.js`,
        `${BASE_URL}/javascript/stream.js`,
        `${BASE_URL}/javascript/viewer.js`,
        `${BASE_URL}/font/v.eot`,
        `${BASE_URL}/font/v.svg`,
        `${BASE_URL}/font/v.ttf`,
        `${BASE_URL}/font/v.woff`,
        `${BASE_URL}/font/v.woff2`,
        `${BASE_URL}/stylesheets/main.css`,
        `${BASE_URL}/stylesheets/fonts.css`,
        `${BASE_URL}/stylesheets/bulma/css/bulma.min.css`,
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
