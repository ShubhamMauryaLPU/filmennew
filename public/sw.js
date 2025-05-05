const cacheName = "v1";
const cachesAssets = ["/index.html", "/images/donuts.webp", "/images/img.jpg"];
//install
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log("Service Worker: Caching Files");
        return cache.addAll(cachesAssets);
      })
      .then(() => self.skipWaiting())
      .catch((err) => console.error("Service Worker Install Error:", err))
  );
});
//activate
self.addEventListener("activate", (e) => {
  // console.log("activated");
  e.waitUntil(
    caches.keys().then((cacheNames)=>{
      return Promise.all(
        cacheNames.map((cache)=>{
          if(cache!=cacheName){
            console.log("Clearing old cache");
            return caches.delete(cache);
          }
        })
      )
    })
  )
});
//fetch
self.addEventListener("fetch", (e) => {
  console.log("Fetch is working");
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

