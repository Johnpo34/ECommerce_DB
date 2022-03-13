const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  }).then(catergories => {
    res.json(catergories)
  });
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      Category_id: req.params.Category_id,
    },
  }).then((deletedCategory) => {
    res.json(deletedCategory);
  }).catch((err) => res.json(err));
  // delete a category by its `id` value
});

module.exports = router;
