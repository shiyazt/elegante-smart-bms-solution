const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');


//Controller
const BuildingController = require('../../controllers/building.controller');



//Middleware
const Auth = require('../../middleware/auth');


//GET

/*
    API : /api/elegante/v1/building/getBuildings;
    Method : GET
    Description : Get Buildings List
*/
router.get('/getBuildings', Auth, BuildingController.getBuildings);

/*
    API : /api/elegante/v1/building/getBuilding/:buildingId;
    Method : GET
    Description : Get Building Details
*/
router.get('/getBuilding/:buildingId', Auth, BuildingController.getBuildingDetails);


/*
    API : /api/elegante/v1/building/getBuildingAlarms/:buildingId;
    Method : GET
    Description : Get Building Alarms
*/
router.get('/getBuildingAlarms/:buildingId', Auth, BuildingController.getBuildingAlarms);


/*
    API : /api/elegante/v1/building/getUserAlarms;
    Method : GET
    Description : Get All User Alarms
*/
router.get('/getUserAlarms', Auth, BuildingController.getUserAlarms);


//POST

/*
    API : /api/elegante/v1/building/addBuilding;
    Method : POST
    Description : Add a Building
*/
router.post('/addBuilding', [Auth, [
    check('name', 'Building Name field required').notEmpty(),
]], BuildingController.addBuilding);


//PUT

//DELETE



module.exports = router;