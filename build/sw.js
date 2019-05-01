// Is the template for Workbox Service Worker. Custom caching rules go here.


if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
   
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([
  {
    "url": "favicon.ico",
    "revision": "c92b85a5b907c70211f4ec25e29a8c4a"
  },
  {
    "url": "index.html",
    "revision": "6646cd6fc1b912e69f87471f6151ca4b"
  },
  {
    "url": "precache-manifest.2424570e97b62eba8f733800764cfae2.js",
    "revision": "2424570e97b62eba8f733800764cfae2"
  },
  {
    "url": "service-worker.js",
    "revision": "3d49412dd1b78df9a6155fa6a220e882"
  },
  {
    "url": "static/css/2.b4c5b390.chunk.css",
    "revision": "b0f3da892d2b6a54e7c887b911afb94f"
  },
  {
    "url": "static/css/main.c4fb14a2.chunk.css",
    "revision": "33cc3191b9f98aef79094fbba9e379fa"
  },
  {
    "url": "static/js/2.8d36ad63.chunk.js",
    "revision": "566efecfede5a31f0f5ef3524cf0cee2"
  },
  {
    "url": "static/js/main.6c7b3b2b.chunk.js",
    "revision": "7149ca2a19a1f2a590df1d797661dc0c"
  },
  {
    "url": "static/js/runtime~main.0165c6bf.js",
    "revision": "e3591a11bb21fbd7e2d1cbf9670c643f"
  },
  {
    "url": "The Ottawa Hospital Round Colour.png",
    "revision": "9760fa0c25baea8e8d09c360d00a5272"
  }
]);
   
  /* custom cache rules*/
  workbox.routing.registerNavigationRoute('/index.html', {
        blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
      });
   
  workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg)$/,
        workbox.strategies.cacheFirst({
          cacheName: 'images',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
          ],
        })
      );
   
  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }