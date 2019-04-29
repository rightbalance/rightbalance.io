importScripts('https://rightbalance.github.io/rightbalance.io/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "https://rightbalance.github.io/rightbalance.io/05999bdc223f3a887bb2.js",
    "revision": "3e5778a7124cca3a3ddf6df66f70c880"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/4f46a5de1cf25e1bc22b.js",
    "revision": "a02dfe5888af28c22f8167ede93f3453"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/5f3d2c0040ac89d0fd3f.js",
    "revision": "35fb7bcde7dbf0111eb49bed2b235fcf"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/6c56df921ddc0c069f4a.js",
    "revision": "0b46645cbf18f8c70cc3c78d80ab973f"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/8de0cfca096beb26e396.js",
    "revision": "b67f85f2c90242a4de2aa34d9512e921"
  }
], {
  "cacheId": "rightbalance.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('https://rightbalance.github.io/rightbalance.io/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://rightbalance.github.io/rightbalance.io/.*'), workbox.strategies.networkFirst({}), 'GET')
