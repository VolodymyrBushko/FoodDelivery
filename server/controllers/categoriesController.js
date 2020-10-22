const Category = require("../models/Categories.js")

module.exports = {
  async getCategories(req, res) {
    try {
      const category = await Category.find();
      res.json(category);
    } catch (e) {
      res.status(500).json({message: 'Чтото пошло не так попробуйте снова'});
    }
  },
  async addCategory(req, res) {
    try {
      const {name, imageUrl} = req.body;
      const category = new Category({name: name, imageUrl: imageUrl});
      await category.save();
      res.status(201).json(category);
    } catch (e) {
      res.status(500).json({message: 'Чтото пошло не так попробуйте снова'});
    }

  },
  async deleteCategoryById(req, res) {
    try {
      const {id} = req.params;
        const category = await Category.remove({_id: id});
        res.json(category);
    } catch (e) {
      res.status(500).json({message: 'Чтото пошло не такбпопробуйте снова'});
    }
  },
  async getCategoryById(req, res) {
    try {
      const {id} = req.params;
      const category = await Category.findById(id);
      await res.json(category);
    } catch (e) {
      res.status(500).json({message: e.message});
    }
  },
  async updateCategoryById(req, res) {
    try {
    const {id} = req.params;
    const category = await Category.findByIdAndUpdate(id,req.body);
    await res.json(category);
    } catch (e) {
      res.status(500).json({message: e.message});
    }
  }
}
