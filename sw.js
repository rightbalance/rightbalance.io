importScripts('https://rightbalance.github.io/rightbalance.io/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "https://rightbalance.github.io/rightbalance.io/34ea81211374727ba4cd.js",
    "revision": "691d2e35bc80914734b2318c0e60ee35"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/5f3d2c0040ac89d0fd3f.js",
    "revision": "35fb7bcde7dbf0111eb49bed2b235fcf"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/6adf419f7f0fe9905d0b.js",
    "revision": "e7f04db29c8f2ef7d6a6927331f3363d"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/8de0cfca096beb26e396.js",
    "revision": "b67f85f2c90242a4de2aa34d9512e921"
  },
  {
    "url": "https://rightbalance.github.io/rightbalance.io/ee502ae11a7c69ac7abc.js",
    "revision": "69f7dcb05c49b0d4e111ae688c106405"
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
