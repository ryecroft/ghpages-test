import fs from 'fs'
import fg from 'fast-glob'


const indexes = fg.sync( '**/index.html' )

const ts = ( new Date() ).getTime().toString()
indexes.forEach( path => {
  let str = fs.readFileSync( path ).toString()
  str = str.replace( /index\.js(?:\?ts=\d+)?/g, `index.js?ts=${ ts }` )
  str = str.replace( /index\.css(?:\?ts=\d+)?/g, `index.css?ts=${ ts }` )
  fs.writeFileSync( path, str )
} )
