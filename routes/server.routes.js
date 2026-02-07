const helloWorld = require("../controllers/server.controllers");
const router = require('express').Router();

router.get('/', helloWorld);

module.exports = router;