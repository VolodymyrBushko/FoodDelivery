const {Router} = require('express');
const passport = require('passport');
const controller = require('../controllers/itemController');
const validator = require('../validators/itemValidator');
const router = new Router();

router.get('/', controller.getItems);
router.get('/:id', controller.getItem);
router.post('/add', [passport.authenticate('jwt', {session: false}), validator], controller.addItem);
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.deleteItem);
router.put('/:id', [passport.authenticate('jwt', {session: false}), validator], controller.updateItem);

module.exports = router;
