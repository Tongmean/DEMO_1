const express = require('express');
const router = express.Router();

//Import bomController form Controller
const { getBoms, postBom, updatebom, deletebom, postBomExcel } =  require("../controller/bomController");
//Protect router from unAuthorize
const requireAuth = require('../middleware/requireAuth');
router.use(requireAuth);
//Get all bom value Sellect *
router.get('/',getBoms);
//Create bom form
router.post('/create',postBom);
//Create bom by excel
router.post('/createExcel',postBomExcel);
//Update bom
router.put('/update',updatebom);
router.delete('/deletebom/:id',deletebom);


module.exports = router;