const Order = require('../models/Order');

module.exports = {

  async getOrders(req, res) {
    try {
      const order = await Order.find();
      await res.json(order);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async getOrder(req, res) {
    try {
      const {id: _id} = req.params;
      const order = Order.findOne({_id});
      await res.json(order);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async addOrder(req, res) {
    try {
      const order = new Order(req.body);
      await order.save();
      await res.status(201).json(order);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async deleteOrder(req, res) {
    try {
      const {id: _id} = req.params;
      const order = await Order.findByIdAndRemove(_id);
      await res.status(204).json(order);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async updateOrder(req, res) {
    try {
      const {id: _id} = req.params;
      const order = await Order.findByIdAndUpdate(_id, req.body);
      await res.status(202).json(order);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  }

}
