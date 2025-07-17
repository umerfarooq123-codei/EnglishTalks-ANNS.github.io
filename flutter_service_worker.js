'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dfd4f1dedada5cac5ab72e6e18d81f3e",
"assets/AssetManifest.bin.json": "68a76d4cb81172daecc8e2fad35a60e4",
"assets/AssetManifest.json": "900fa8c1a0fc6cdc5322a6082e050cf6",
"assets/assets/images/error.jpg": "09b0f1d653d9befded8371591617bdba",
"assets/assets/images/ET_logo.png": "eb90e02bcecc87a4b0c16e18a7017e33",
"assets/assets/images/et_logo_progress.png": "b035d1e23aa983a5e4bf7f4197526530",
"assets/assets/images/map.png": "0ef0e3d1f03c730889f9c025700e4fd9",
"assets/assets/svg/active-student-admission.svg": "fe5efd953e5a5ecaaf993b206a1bc9f3",
"assets/assets/svg/add-edit-student-admission.svg": "177998f2da5e75e79f3d641228cfac35",
"assets/assets/svg/admission-dashboard.svg": "8e40c31c0758494834c31c8edb28063e",
"assets/assets/svg/admission-top-bar.svg": "418b3362cff31b53dbdde54ca3af623b",
"assets/assets/svg/admisson-menu-red.svg": "3b8cf252688ccf65c6aaa62ed92fee52",
"assets/assets/svg/admisson-menu-white.svg": "901150845898149b47933efd8f278905",
"assets/assets/svg/all-student-admission.svg": "bb34def6b03d2d3d38df1184ddd2d70c",
"assets/assets/svg/attendance-admission.svg": "805867708dc214e80d8d992bb2cc5e0e",
"assets/assets/svg/back-button-top-bar.svg": "2f7c0b7e5ca62aaed1b983066f033f96",
"assets/assets/svg/brand-logo-download-materials.svg": "ce66c45b53ecf18ca52e6c8de34882c2",
"assets/assets/svg/campaigne-download-materials.svg": "35e4f660159537b6a981350cfbe81ff5",
"assets/assets/svg/create-letter-admission.svg": "8499b3d173a773d325ff1a92e994d96f",
"assets/assets/svg/create-ticket-dashboard.svg": "8f885021489faaaf78653ae98dbfe5b7",
"assets/assets/svg/dasboard-top-bar.svg": "f9cb9c946f187a4942fcb52a9ca37424",
"assets/assets/svg/dashboard-menu-red.svg": "b8b46465d7f901b0d7b80ea32dd7c91e",
"assets/assets/svg/dashboard-menu-white.svg": "081fdad2a1abd9e39bd513ec4db1a86a",
"assets/assets/svg/digital-marketing-marketing-crm.svg": "17da693e1f68e69a9c9a58bf3d527cb2",
"assets/assets/svg/digital-materials-download-materials.svg": "7ef4465c9e4a144ed4b9c321f111a2f6",
"assets/assets/svg/do-you-have-question-download-materials.svg": "7f2bc3dec6f98a7b64469cd613ca89fe",
"assets/assets/svg/download-materials-dashboard.svg": "d5b911ac29f538ae497aaab68c5c2217",
"assets/assets/svg/download-materials-red.svg": "5e460cbfac72e2f93994946dfd16fb48",
"assets/assets/svg/download-materials-white.svg": "2bd2916cb620e418dfff7555e84b2341",
"assets/assets/svg/downloadable-material-top-bar.svg": "feadecec0e13b7b5c62cedbaae3f69d2",
"assets/assets/svg/email-campeignes-marketing-crm.svg": "33861e6de69c68cd052e91ce83d4dfbc",
"assets/assets/svg/expo-fair-download-materials.svg": "bc83ca77c5492113b82d849f234c6973",
"assets/assets/svg/expo-fair-materials-dashboard.svg": "fe2ab6c1f228fa816ef8dd1747be6c30",
"assets/assets/svg/flyer-brochures-download-materials.svg": "23e4812bab22bb1cbf8941ba2975e9d9",
"assets/assets/svg/help-centre-top-bar.svg": "7d6c048e9e60a605958be2cda46a059a",
"assets/assets/svg/help-documents-admission.svg": "ff6cb4f157fbc2c9201598496855be1e",
"assets/assets/svg/help-documents-menu-red.svg": "f52fea3877734c74dadf2c53d4c183d2",
"assets/assets/svg/help-documents-menu-white.svg": "07d3eed2fda66e10588e4a8739406e6b",
"assets/assets/svg/insurances-dashboard.svg": "b6a47af8218d59d46f8bbff3dcea8ac2",
"assets/assets/svg/Lead-management-marketing-crm.svg": "a78410aa0f000dd4e0d8e338a0cf63d3",
"assets/assets/svg/marketing-crm-dashboard.svg": "c5d4d665976a34a45707ed75b5617760",
"assets/assets/svg/marketing-CRM-menu-red.svg": "011d54a7e50834cc87e67df63618d5c4",
"assets/assets/svg/marketing-CRM-menu-white.svg": "3f37bd8b6135c03f334f91788d78f710",
"assets/assets/svg/marketing-crm-top-bar.svg": "409660977b18bcb50f0289a4c30d10b9",
"assets/assets/svg/other-materials-download-materials.svg": "930cecf81883e6d80bfb5587f2ca3417",
"assets/assets/svg/placement-test-dashboard.svg": "a4352b028b3be86dbeb9bef5bee860ec",
"assets/assets/svg/portal-settings-dashboard.svg": "3a40aca323ea7454ff16a17247078472",
"assets/assets/svg/portal-settings-marketing-crm.svg": "3a40aca323ea7454ff16a17247078472",
"assets/assets/svg/price-list-download-materials.svg": "6b6b144f6fa998978a10eea5a9685ebf",
"assets/assets/svg/ready-letters-admission.svg": "018546a80235380ef84db08d5e38ccc5",
"assets/assets/svg/report-analysis-dashboard.svg": "839e663aa44054b87b459b387b86a264",
"assets/assets/svg/social-media-items-dashboard.svg": "c66b30aba647d6d95bdc29d815be0992",
"assets/assets/svg/social-media-items-download-materials.svg": "c66b30aba647d6d95bdc29d815be0992",
"assets/assets/svg/warning-appeals-admission.svg": "399e8c8ce3c6170750f2ae7cfd177a59",
"assets/FontManifest.json": "33a5ec82670ed1a5e16dbef57a26b019",
"assets/fonts/MaterialIcons-Regular.otf": "401a092a550b0eee58e179f5dee50a6b",
"assets/NOTICES": "271b1e64498b7d640d74b6f112d2f460",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/b2557f68": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"et_logo.png": "b035d1e23aa983a5e4bf7f4197526530",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "f258107209712fb4dde102264b8e32cf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "909ba3953d6acad46468a8714c3bb9e3",
"/": "909ba3953d6acad46468a8714c3bb9e3",
"main.dart.js": "bc4a51e8bef11c0aacdfbed62aa5a13d",
"manifest.json": "fc2f401581fe725967e5cbcaf37449e7",
"version.json": "165c6cc87d3fa04da54e1eba79a2cc77"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
