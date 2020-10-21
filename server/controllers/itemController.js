const Item = require('../models/Item');

module.exports = {

  async getItems(req, res) {
    try {
      const items = await Item.find();
      await res.json(items);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async getItem(req, res) {
    try {
      const {id: _id} = req.params;
      const item = Item.findOne({_id});
      await res.json(item);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async addItem(req, res) {
    try {
      const item = new Item(req.body);
      await res.status(201).json(item);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async deleteItem(req, res) {
    try {
      const {id: _id} = req.params;
      const item = await Item.findByIdAndRemove(_id);
      await res.status(204).json(item);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async updateItem(req, res) {
    try {
      const {id: _id} = req.params;
      const item = await Item.findByIdAndUpdate(_id, req.body);
      await res.status(202).json(item);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  }

}
