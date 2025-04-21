const CACHE_NAME = "mycafe-cache-v3";
const urlsToCache = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/manifest.json",
  "/offline.html"
  // Remove image URLs if they're causing issues
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Cache each resource individually with error handling
        return Promise.all(
          urlsToCache.map((url) => {
            return cache.add(url).catch((err) => {
              console.warn(`Failed to cache ${url}:`, err);
              return Promise.resolve(); // Continue even if one fails
            });
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  
  // Skip non-http requests and chrome-extension requests
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if available
        if (cachedResponse) return cachedResponse;
        
        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Cache successful responses
            if (response && response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseToCache));
            }
            return response;
          })
          .catch(() => {
            // Special handling for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
            return Response.error();
          });
      })
  );
});