
exports.up = function (knex) {
  return knex.schema.createTable('incidents', function (table) {
    //Como se fosse um id criado automaticamente pra cada caso.
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    //Formato número com casas decimais
    table.decimal('value').notNullable();
    //Criando relacionamento com qual ong que criou o caso.
    table.string('ong_id').notNullable();

    //Chave estrangeira para verificar se o ong_id ta cadastrado dentro da tabela ong
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('incidents');
};
