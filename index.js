const PouchDB = require('pouchdb');

const LocalPouchDB = PouchDB.defaults({
  prefix: './db/',
});

const records = new LocalPouchDB('records', {
  skip_setup: false,
});

console.log('Save record');

records.post({
  my: 'record',
}).then((response) => {
  console.log(response)
}).catch((err) => {
  console.error(err);
});
