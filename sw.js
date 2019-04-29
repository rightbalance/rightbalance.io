importScripts('./nuxtjs-github-pages-test/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "./nuxtjs-github-pages-test/_nuxt/1a70420e6fce61fdc40e.js",
    "revision": "810bb75372ee999f1a2071e9f2fdd37d"
  },
  {
    "url": "./nuxtjs-github-pages-test/_nuxt/5f3d2c0040ac89d0fd3f.js",
    "revision": "35fb7bcde7dbf0111eb49bed2b235fcf"
  },
  {
    "url": "./nuxtjs-github-pages-test/_nuxt/60f4bce1359ab16cb595.js",
    "revision": "42568e7b99c3e754ab300e3ccce40e07"
  },
  {
    "url": "./nuxtjs-github-pages-test/_nuxt/6c56df921ddc0c069f4a.js",
    "revision": "0b46645cbf18f8c70cc3c78d80ab973f"
  },
  {
    "url": "./nuxtjs-github-pages-test/_nuxt/8de0cfca096beb26e396.js",
    "revision": "b67f85f2c90242a4de2aa34d9512e921"
  }
], {
  "cacheId": "nuxtjs-github-pages-test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('./nuxtjs-github-pages-test/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('./nuxtjs-github-pages-test/.*'), workbox.strategies.networkFirst({}), 'GET')
