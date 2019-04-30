importScripts('https://rightbalance.github.io/rightbalance.io/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "https://rightbalance.github.io/rightbalance.io/1a404a9ac77580f56122.js",
    "revision": "02f5b022e4ca3c9e1f9f32f7adbf136f"
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
    "url": "https://rightbalance.github.io/rightbalance.io/b92e7fa3d075e57e2761.js",
    "revision": "1d80e86708d2bf7c4a3abd368cfd4bc3"
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
