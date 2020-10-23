const User = require('../models/User.js');
const {validationResult} = require('express-validator');

module.exports = {

  async getUsers(req, res) {
    try {
      const user = await User.find();
      await res.json(user);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async getUserById(req, res) {
    try {
      const {id} = req.params;
      const user = await User.findById(id);
      await res.json(user);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async loginUser(req, res) {
    try {
      const {email, password} = req.body;
      const user = await User.findOne({email, password});
      if (user) {
        res.sendStatus(200);
      } else {
        res.sendStatus(403);
      }
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async registerUser(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({message: errors.array()[0].msg});

      const user = new User(req.body);
      console.log(req.body);
      await user.save();
      await res.status(201).json(user);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }

  },

  async updateUserById(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({message: errors.array()[0].msg});

      const {id} = req.params;
      const user = await User.findByIdAndUpdate(id, req.body);
      await res.json(user);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async deleteUserById(req, res) {
    try {
      const {id} = req.params;
      const user = await User.remove({_id: id});
      await res.json(user);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  }

};
