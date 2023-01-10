document.querySelector( '#input' ).addEventListener( 'input', function ( e ) {
  document.cookie = "ukcsid=" + e.target.value.replace( /ukcsid=/g, "" )
} )