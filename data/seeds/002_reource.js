const resources = [
  {
    name: 'Lambda Student',
    description: 'a soon to be hired developer'
  },
  {
    name: 'MacBook Pro #1',
    description: 'an overly expensive laptop computer'
  }
]
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource')
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert(resources);
    });
};