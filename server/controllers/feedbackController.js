const Feedback = require('../models/Feedback');
const {validationResult} = require('express-validator');

module.exports = {

  async getPost(req, res) {
    try {
      const feedback = await Feedback.find();
      await res.json(feedback);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async addPost(req, res) {
    try {

      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({message: errors.array()[0].msg});

      const {imageUrl,post} = req.body;
      const feedback = new Feedback({imageUrl: imageUrl,post:post});
      await feedback.save();
      await res.status(201).json(feedback);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  },

  async deletePostById(req, res) {
    try {
      const {id} = req.params;
      const feedback = await Feedback.remove({_id: id});
      await res.json(feedback);
    } catch (e) {
      console.log(e);
      await res.status(500).json({message: e.message});
    }
  }
};
