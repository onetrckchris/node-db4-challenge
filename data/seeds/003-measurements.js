exports.seed = function(knex) {
  return knex('measurements').del()
    .then(function () {
      return knex('measurements').insert([
        {recipe_id: 1, ingredient_id: 1, amount: '16 cups'},
        {recipe_id: 1, ingredient_id: 4, amount: '2 cups'},
        {recipe_id: 2, ingredient_id: 1, amount: '6 cups'},
        {recipe_id: 2, ingredient_id: 2, amount: '8 oz'},
        {recipe_id: 2, ingredient_id: 4, amount: '12 oz'},
        {recipe_id: 3, ingredient_id: 2, amount: '12 oz'},
        {recipe_id: 3, ingredient_id: 3, amount: '8 oz'},
        {recipe_id: 3, ingredient_id: 5, amount: '4 slices cut'}
      ]);
    });
};
