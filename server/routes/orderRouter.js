const {Router} = require('express');
const controller = require('../controllers/orderController');
const validator = require('../validators/orderValidator');
const router = new Router();

router.get('/', controller.getOrders);
router.get('/:id', controller.getOrder);
router.get('/users/:id', controller.getOrderByUser);
router.post('/add', validator, controller.addOrder);
router.delete('/:id', controller.deleteOrder);
router.put('/:id', validator, controller.updateOrder);

module.exports = router;
