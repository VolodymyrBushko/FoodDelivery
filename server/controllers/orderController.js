const Order = require('../models/Order');
const {validationResult} = require('express-validator');

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
      const order = await Order.findOne({_id});
      await res.json(order);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async getOrderByUser(req, res) {
    try {
      const {id: user} = req.params;
      const orders = await Order.find({user});
      await res.json(orders);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async addOrder(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({message: errors.array()[0].msg});

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

      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({message: errors.array()[0].msg});

      const {id: _id} = req.params;
      const order = await Order.findByIdAndUpdate(_id, req.body);
      await res.status(202).json(order);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  }

}
