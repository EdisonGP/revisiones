const { Router } = require("express");
const router = Router();

const { 
    consultarActores,
    crearActor,
    updateActor,
} = require("../controllers/controller-movies");


//actor
router.get("/revision", consultarActores);
router.post("/revision", crearActor);
router.put("/revision", updateActor);

module.exports = router;