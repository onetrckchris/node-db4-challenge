exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .notNullable();
    })
    .createTable('measurements', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.text('amount')
            .notNullable()
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.text('step_description', 255)
            .notNullable();
        tbl.integer('step_number')
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('measurements')
        .dropTableIfExists('instructions');
};
