// rutas para agenda
const express = require('express');
const router = express.Router();

router.post('/', (req,res) => {
    res.send("hola mundo");
});

module.export = router;