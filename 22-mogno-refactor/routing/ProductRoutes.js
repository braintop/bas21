let express = require('express');
let router = express.Router();
let controller = require('../controllers/ProductController');
const {auth} = require('../controllers/UserController');
router.post('/', controller.add);
router.get('/',  auth, controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id', controller.deleteById);
router.put('/:id', controller.updateById);
module.exports = router;


