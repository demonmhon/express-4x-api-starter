db.createUser({
  user: '<user>',
  pwd: '<password>',
  roles: [
    {
      role: 'readWrite',
      db: '<db>',
    },
  ],
});

db = new Mongo().getDB('sampledb');
db.createCollection('users');
db.createCollection('sample_collection', { capped: false });
db.sample_collection.insert([{ title: 'test' }]);
