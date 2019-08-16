const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
};

function getShoppingList(recipe_id) {
    return db('measurements as m')
        .join('recipes as r', 'm.recipe_id', 'r.id')
        .join('ingredients as i', 'm.ingredient_id', 'i.id')
        .select('i.name', 'm.amount')
        .where('r.id', recipe_id);
};

function getInstructions(recipe_id) {
    return db('steps as s')
        .join('recipes as r', 's.recipe_id', 'r.id')
        .select('s.step_number', 's.step_description')
        .orderBy('s.step_number', 'asc')
        .where('r.id', recipe_id);
};