const { Router } = require('express');
const router = Router();
const mainController=require('./controllers/mainController.js');

router.get('/', mainController.homepage);

module.exports = router;