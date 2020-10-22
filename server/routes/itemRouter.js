const {Router} = require('express');
const controller = require('../controllers/itemController');
const validator = require('../validators/itemValidator');
const router = new Router();

router.get('/', controller.getItems);
router.get('/:id', controller.getItem);
router.post('/add', validator, controller.addItem);
router.delete('/:id', controller.deleteItem);
router.put('/:id', validator, controller.updateItem);

module.exports = router;
