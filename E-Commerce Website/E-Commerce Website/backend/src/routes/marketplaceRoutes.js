const express = require('express');
const router = express.Router();
const marketplaceController = require('../controllers/marketplaceController');

// Route to get all marketplace items
router.get('/', marketplaceController.getAllItems);

// Route to add a new marketplace item
router.post('/', marketplaceController.addItem);

// Route to delete a marketplace item by ID
router.delete('/:id', marketplaceController.deleteItem);

module.exports = router;