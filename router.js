
const route = require('express-promise-router');
const router = new route();
const controller=require('./geoController')

router.post('/',controller.getData)
module.exports=router