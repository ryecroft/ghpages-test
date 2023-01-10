document.querySelector( '#input' ).addEventListener( 'input', function ( e ) {
  document.cookie = "ukcsid=" + e.target.value.replace( /ukcsid=/g, "" )
  document.querySelector( '#cookie-value' ).innerHTML = document.cookie
} )

document.addEventListener( 'DOMContentLoaded', () => {
  document.querySelector( '#cookie-value' ).innerHTML = document.cookie
} )