importScripts('https://rightbalance.github.io/rightbalance.io/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "https://rightbalance.github.io/rightbalance.io/01969adb279f99a1eb12.js",
    "revision": "788832956c0bf71a2658ab8a12fe0005"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/34ea81211374727ba4cd.js",
    "revision": "691d2e35bc80914734b2318c0e60ee35"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/5f3d2c0040ac89d0fd3f.js",
    "revision": "35fb7bcde7dbf0111eb49bed2b235fcf"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/8de0cfca096beb26e396.js",
    "revision": "b67f85f2c90242a4de2aa34d9512e921"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/c5be141ff5775820ac6f.js",
    "revision": "01bfd4dcc203706f041d14d0e138fac0"
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
