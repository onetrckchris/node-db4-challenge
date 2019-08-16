exports.seed = function(knex) {
  return knex('steps').del()
    .then(function () {
      return knex('steps').insert([
        {step_description: 'Add a crap ton of milk to a big pot.', step_number: 1, recipe_id: 1},
        {step_description: 'Wait for it to boil, I guess. Add breadcrumbs.', step_number: 2, recipe_id: 1},
        {step_description: 'Add milk into a pot and then into a freezer and then into a pot... I think.', step_number: 1, recipe_id: 2},
        {step_description: 'Put a bunch of cheese on the bottom of a thing.', step_number: 2, recipe_id: 2},
        {step_description: 'Layer the bread crumbs along the hot/cold cheese and milk.', step_number: 3, recipe_id: 2},
        {step_description: 'Cut the cheese, hahahaha.', step_number: 1, recipe_id: 3},
        {step_description: 'Add the sauce to the cheese. Do not get lost in the sauce.', step_number: 2, recipe_id: 3},
        {step_description: 'Layer those perfect slices of cooked ham right on top.', step_number: 3, recipe_id: 3}
      ]);
    });
};
