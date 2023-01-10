const GHPATH = '/ghpages-test'
const APP_PREFIX = 'gppwa_'
const VERSION = 'version_004'
const URLS = [
  `${ GHPATH }/crag/index.html`,
  `${ GHPATH }/logbook/index.html`,
  `${ GHPATH }/wishlist/index.html`,
  `${ GHPATH }/partners/index.html`,
  `${ GHPATH }/img/icon.png`,
  `${ GHPATH }/dist/assets/index.css`,
  `${ GHPATH }/dist/index.js`,
  `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css`,
  `https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css`,
]

const CACHE_NAME = APP_PREFIX + VERSION
self.addEventListener( 'fetch', function ( e ) {
  console.log( 'Fetch request : ' + e.request.url )
  e.respondWith(
    caches.match( e.request ).then( function ( request ) {
      if ( request ) {
        console.log( 'Responding with cache : ' + e.request.url )
        return request
      } else {
        console.log( 'File is not cached, fetching : ' + e.request.url )
        return fetch( e.request )
      }
    } )
  )
} )

self.addEventListener( 'install', function ( e ) {
  e.waitUntil(
    caches.open( CACHE_NAME ).then( function ( cache ) {
      console.log( 'Installing cache : ' + CACHE_NAME )
      return cache.addAll( URLS )
    } )
  )
} )

self.addEventListener( 'activate', function ( e ) {
  e.waitUntil(
    caches.keys().then( function ( keyList ) {
      const cacheWhitelist = keyList.filter( function ( key ) {
        return key.indexOf( APP_PREFIX )
      } )
      cacheWhitelist.push( CACHE_NAME )
      return Promise.all( keyList.map( function ( key, i ) {
        if ( cacheWhitelist.indexOf( key ) === -1 ) {
          console.log( 'Deleting cache : ' + keyList[ i ] )
          return caches.delete( keyList[ i ] )
        }
      } ) )
    } )
  )
} )