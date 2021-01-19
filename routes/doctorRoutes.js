// var express = require('express');
// var router = express.Router();
var doctorController = require('../controllers/doctorController.js');

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
router.get('/doctor', doctorController.list);

/*
 * GET
 */
router.get('/doctor/:id', doctorController.show);

/*
 * POST
 */
router.post('/doctor', doctorController.create);

/*
 * PUT
 */
router.put('/doctor/:id', doctorController.update);

/*
 * DELETE
 */
router.delete('/doctor/:id', doctorController.remove);

}


// module.exports = router;
