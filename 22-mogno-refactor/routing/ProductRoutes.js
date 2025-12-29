let express = require('express');
let router = express.Router();
let controller = require('../controllers/ProductController');
router.post('/', controller.add);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.delete('/:id', controller.deleteById);
router.put('/:id', controller.updateById);
module.exports = router;