const router = require('express').Router();
const Recipes = require('./recipes-model');

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get recipes.' });
    }
});

router.get('/:id/shoppingList', async (req, res) => {
    try {
        const shoppingList = await Recipes.getShoppingList(req.params.id);
        if (shoppingList.length) res.json(shoppingList)
        res.status(404).json({ error: "Cannot find a shopping list for this recipe." });
    } catch (err) {
        res.status(500).json({ message: 'Failed to get shopping list.' });
    }
});

router.get('/:id/instructions', async (req, res) => {
    try {
        const instructions = await Recipes.getInstructions(req.params.id);
        if (instructions.length) res.json(instructions)
        res.status(404).json({ error: "Cannot find instructions for this recipe." });
    } catch (err) {
        res.status(500).json({ message: 'Failed to get instructions.' });
    }
});

module.exports = router;