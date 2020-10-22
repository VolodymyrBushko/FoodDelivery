const User = require("../models/User.js");

module.exports = {
  async getUsers(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (e) {
      res.status(500).json({message: 'Чтото пошло не так попробуйте снова'});
    }
  },
  async getUserById(req, res) {
    try {
      const {id} = req.params;
      const user = await User.findById(id);
      await res.json(user);
    } catch (e) {
      res.status(500).json({message: e.message});
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
      res.status(500).json({message: e.message});
    }
  },
  async registerUser(req, res) {
    try {
      const user = new User(req.body);
      console.log(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (e) {
      res.status(500).json({message: 'Чтото пошло не так попробуйте снова'});
    }

  },
  async updateUserById(req, res) {
    try {
      const {id} = req.params;
      const user = await User.findByIdAndUpdate(id, req.body);
      await res.json(user);
    } catch (e) {
      res.status(500).json({message: e.message});
    }
  },
  async deleteUserById(req, res) {
    try {
      const {id} = req.params;
      const user = await User.remove({_id: id});
      res.json(user);
    } catch (e) {
      res.status(500).json({message: 'Чтото пошло не такбпопробуйте снова'});
    }
  }

}
