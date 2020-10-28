const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator');
const config = require('config');
const jwtSecret = config.get('jwtSecret');

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

      const user = await User.findOne({email: req.body.email});
      if (user) {
        const passwordResult = await bcrypt.compare(req.body.password, user.password);
        if (passwordResult) {
          const token = jwt.sign({
            id: user._id,
            email: user.email,
            isAdmin: user.isAdmin
          }, jwtSecret, {expiresIn: 60 * 60 * 60});
          await res.json({token: `Bearer ${token}`});
        } else {
          await res.status(401).json({message: 'invalid email or password'});
        }
      } else {
        await res.status(404).json({message: 'no user with this email address'});
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
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
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
