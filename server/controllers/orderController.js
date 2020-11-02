const Order = require('../models/Order');
const {validationResult} = require('express-validator');
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');
const config = require('config');

const transporter = nodemailer.createTransport(sendgrid({
  auth: {
    api_key: config.get('send_grid_api_key')
  }
}));

module.exports = {

  async getOrders(req, res) {
    try {
      const order = await Order.find().populate('items.item user', 'name login');
      await res.json(order);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async getOrder(req, res) {
    try {
      const {id: _id} = req.params;
      const order = await Order.findOne({_id}).populate('items.item user', 'name login');
      await res.json(order);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async getOrderByUser(req, res) {
    try {
      const {id: user} = req.params;
      const orders = await Order.find({user}).populate('items.item user', 'name login');
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
  },

  async sendOrderEmail(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({message: errors.array()[0].msg});

      await transporter.sendMail({
        to: req.body.email,
        from: 'testcomandproject@gmail.com',
        subject: 'Замовлення',
        html: `
          <h1>Замовлення успішно оформлено!</h1>
          <p>${req.body.date}</p>
          <hr>
        `
      });
      res.json({message: 'email has been sent'});
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  }

}
