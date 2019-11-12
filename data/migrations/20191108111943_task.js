
exports.up = function(knex) {
  return knex.schema.createTable("task", tbl => {
    tbl.increments();

    tbl.string("description", 255).notNullable();

    tbl.string("notes", 255);

    tbl.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("task");
};
