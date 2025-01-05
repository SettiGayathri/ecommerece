const MarketplaceItem = require('../models/MarketplaceItem');

// List all marketplace items
exports.listItems = async (req, res) => {
  try {
    const items = await MarketplaceItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving items', error });
  }
};

// Add a new marketplace item
exports.addItem = async (req, res) => {
  const { title, description, price, seller } = req.body;
  const newItem = new MarketplaceItem({ title, description, price, seller });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: 'Error adding item', error });
  }
};

// Delete a marketplace item
exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await MarketplaceItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error });
  }
};