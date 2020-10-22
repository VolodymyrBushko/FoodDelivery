const {Router} = require('express');
const controller = require('../controllers/orderController');
const router = new Router();

router.get('/', controller.getOrders);
router.get('/:id', controller.getOrder);
router.post('/add', controller.addOrder);
router.delete('/:id', controller.deleteOrder);
router.put('/:id', controller.updateOrder);

module.exports = router;
