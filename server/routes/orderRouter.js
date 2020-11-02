const {Router} = require('express');
const passport = require('passport');
const controller = require('../controllers/orderController');
const validator = require('../validators/orderValidator');
const router = new Router();

router.get('/', passport.authenticate('jwt', {session: false}), controller.getOrders);
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getOrder);
router.get('/users/:id', passport.authenticate('jwt', {session: false}), controller.getOrderByUser);
router.post('/add', validator, controller.addOrder);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.deleteOrder);
router.put('/:id', [passport.authenticate('jwt', {session: false}), validator], controller.updateOrder);
router.post('/email/send', validator, controller.sendOrderEmail);

module.exports = router;
