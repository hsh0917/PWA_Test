importScripts("http://localhost:5000/#/precache-manifest.e3ab89b537f9dd3c6be5be693acf032c.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

self.addEventListener('install', event => {
    const asyncInstall = new Promise(resolve => {
        console.log("Waiting to resolve...")
        setTimeout(resolve, 5000)
      })
    event.waitUntil(asyncInstall)
  });

self.addEventListener('activate', event => {
    console.log('activate')
});

workbox.routing.registerRoute(
  new RegExp('https:.*min\.(css|js|html)'),
  workbox.strategies.staleWhileRevalidate({
      cacheName: 'CDN'
    }),
);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/g,
  workbox.strategies.networkFirst({
    cacheName: "images"
  })
);

  workbox.routing.registerRoute(
  /\.(?:js|jsx)$/,
  workbox.strategies.networkFirst({
    cacheName: "javascripts"
  })
);

workbox.routing.registerRoute(
  /.*\.css/,
  workbox.strategies.networkFirst({
    cacheName: "css-cache"
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
