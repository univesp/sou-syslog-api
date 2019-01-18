const express = require('express');
const router = express.Router();

const testController = require('../../controllers/Test');

router.get('/', testController.index);
router.post('/', testController.create);

module.exports = router;
