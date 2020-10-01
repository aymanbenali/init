
export function up (knex) {
  return knex.schema.createTable('User', (item) => {
      item.string('firstName');
      item.string('lastName');
      item.string('email');
      item.string('password');
  })
};

export function down (knex) {
    return knex.schema.dropTableIfExists('User');
};
