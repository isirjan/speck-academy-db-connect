const express = require('express');
const hallsControler = require('./controller');
const router = new express.Router();

router.route('/').get(hallsControler.getHalls);
// router.route('/:hallId').get(hallsControler.getHallById);

module.exports = router;