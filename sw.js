importScripts('./rightbalance.io/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "./rightbalance.io/_nuxt/30beb7039b3b275ca445.js",
    "revision": "97b4a5f90de0f0f456d1aed4c576444a"
  },
  {
    "url": "./rightbalance.io/_nuxt/34040bcbb607c24a1804.js",
    "revision": "acf1cfdf2058f70d53b8deecda7964cd"
  },
  {
    "url": "./rightbalance.io/_nuxt/5f3d2c0040ac89d0fd3f.js",
    "revision": "35fb7bcde7dbf0111eb49bed2b235fcf"
  },
  {
    "url": "./rightbalance.io/_nuxt/6c56df921ddc0c069f4a.js",
    "revision": "0b46645cbf18f8c70cc3c78d80ab973f"
  },
  {
    "url": "./rightbalance.io/_nuxt/8de0cfca096beb26e396.js",
    "revision": "b67f85f2c90242a4de2aa34d9512e921"
  }
], {
  "cacheId": "rightbalance.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('./rightbalance.io/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('./rightbalance.io/.*'), workbox.strategies.networkFirst({}), 'GET')
