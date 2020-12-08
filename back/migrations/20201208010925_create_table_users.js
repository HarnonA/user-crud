
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.string('id')
        table.string('name').notNull()
        table.string('email').notNull()
        table.string('password').notNull()
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};

