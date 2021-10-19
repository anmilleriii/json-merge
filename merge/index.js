// Compare and deepmerge json files

const merge = require('deepmerge');
const fs = require('fs');

const db = require('../data/db.json') // local db.json
const newDbFromCloud = require('../data/in/new_db_from_cloud.json')

const merged = merge(db, newDbFromCloud)
const outputFileName = './data/db.json';

fs.writeFile(outputFileName, JSON.stringify(merged, null, 2), (e) => {
  if (e) {
    throw e;
  } else {
    console.log('Replaced existing db.json with merged JSON.')
  }
})
