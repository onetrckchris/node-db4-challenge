exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {name: 'Milk'},
        {name: 'Cheese'},
        {name: 'Tomato Sauce'},
        {name: 'Bread Crumbs'},
        {name: 'Ham'}
      ]);
    });
};
