exports.up = function(knex) {
    return knex.schema.createTable('comments', function (table) {
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('phone').notNullable()
        table.string('comment', 500).notNullable()
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('comments')
};
