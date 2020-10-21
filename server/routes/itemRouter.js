const {Router} = require('express');
const controller = require('../controllers/itemController');
const router = new Router();

router.get('/', controller.getItems);
router.get('/:id', controller.getItem);
router.post('/add', controller.addItem);
router.delete('/:id', controller.deleteItem);
router.put('/:id', controller.updateItem);

module.exports = router;
