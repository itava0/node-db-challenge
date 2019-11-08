const projects = [
  {
    name: "MovieReviews",
    description: "A movie review website",
    task_id: 1,
    resource_id: 1
  },
  {
    name: "Spring Challenge",
    description: "Every week coding challenge",
    task_id: 2,
    resource_id: 2
  }
];

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("project")
    .then(function() {
      // Inserts seed entries
      return knex("project").insert(projects);
    });
};
