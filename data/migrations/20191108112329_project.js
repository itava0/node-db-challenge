
exports.up = function(knex) {
  return knex.schema.createTable("project", tbl => {
    tbl.increments();

    tbl.string("name", 255).notNullable();
    tbl.string("description", 255);
    tbl.boolean("completed").defaultTo(false);

    tbl
      .integer("task_id")
      .unsigned()
      .references("id")
      .inTable("task")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl
      .integer("resource_id")
      .unsigned()
      .references("id")
      .inTable("resource")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
    .dropTableIfExists("project");
};
