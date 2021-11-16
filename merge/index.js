// Compare and deepmerge json files

const merge = require('deepmerge');
const fs = require('fs');

const oldDb = require('../data/db.json')
const newDb = require('../data/in/new_db.json')
const outputFileName = './data/db.json';

// Entirely replace 
console.time('replace')
fs.writeFile(outputFileName, JSON.stringify(newDb, null, 2), (e) => {
  if (e) {
    throw e;
  } else {
    console.log('Replaced existing db.json with new JSON.')
  }
})
console.timeEnd('replace')

// // Reset
// fs.writeFile(outputFileName, JSON.stringify(oldDb, null, 2), (e) => {
//   if (e) {
//     throw e;
//   } else {
//     console.log('Reset')
//   }
// })

// Merge
console.time('merge')
const merged = merge(oldDb, newDb)
fs.writeFile(outputFileName, JSON.stringify(merged, null, 2), (e) => {
  if (e) {
    throw e;
  } else {
    console.log('Replaced existing db.json with merged JSON.')
  }
})
console.timeEnd('merge')

