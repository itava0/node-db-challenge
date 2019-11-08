const tasks = [
  {
    description: 'run git init',
    notes: 'to initialize a repo',
  },
  {
    description: 'npm init -y',
    notes: 'create a package.json',
  }
]


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task')
    .then(function () {
      // Inserts seed entries
      return knex('task').insert(tasks);
    });
};
