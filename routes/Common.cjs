const express = require("express");
const router = express.Router();
const Common = require("../WorkService/Model_Common.cjs");


router.post("/Prt_Poz", Common.Prt_poz);
router.post("/Search860", Common.Search860);
router.post("/Search846", Common.Search846);
router.post("/Search856", Common.Search856);
router.post("/Search810", Common.Search810);

module.exports = router;
