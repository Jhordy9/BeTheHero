//Método up sempre responsável pela criação
exports.up = function (knex) {
  //Criando uma nova tabela
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    //O parametro 2 é referente ao número de caracteres.
    table.string('uf', 2).notNullable();
  });
};
//Método down para caso dê algum problema (Necessidade de deletar)
exports.down = function (knex) {
  return knex.schema.dropTable('ongs');
};
