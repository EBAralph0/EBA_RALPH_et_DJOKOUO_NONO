// var express = require('express');
// var router = express.Router();
var consultController = require('../controllers/consultController.js');

//On expose une fonction qui prend en parametre 
//le routeur sur lequel on cree ces routes 
module.exports = 

/**
 * 
 * @param {*} router router sur lequel on defini ces routes
 */
function(router){
/*
 * GET
 */
router.get('/consult', consultController.list);

/*
 * GET
 */
router.get('/consult/:id', consultController.show);

/*
 * POST
 */
router.post('/consult', consultController.create);

/*
 * PUT
 */
router.put('/consult/:id', consultController.update);

/*
 * DELETE
 */
router.delete('/consult:id', consultController.remove);

}


// module.exports = router;
