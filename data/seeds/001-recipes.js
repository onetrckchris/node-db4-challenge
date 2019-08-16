exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {name: 'Arroz con Leche'},
        {name: 'Cheese Cake'},
        {name: 'Pizza'}
      ]);
    });
};
