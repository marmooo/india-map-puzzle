const CACHE_NAME="2025-03-05 00:00",urlsToCache=["/india-map-puzzle/","/india-map-puzzle/en/","/india-map-puzzle/index.js","/india-map-puzzle/map.svg","/india-map-puzzle/data/en.lst","/india-map-puzzle/mp3/decision50.mp3","/india-map-puzzle/mp3/correct1.mp3","/india-map-puzzle/mp3/correct3.mp3","/india-map-puzzle/favicon/favicon.svg"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(urlsToCache)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e!==CACHE_NAME).map(e=>caches.delete(e)))))})