const express = require("express");
const app = express();
const port = 8082;
const oracledb = require("oracledb");


const cors = require('cors');
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], // เพิ่ม headers ที่จำเป็น
}));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
    return res.sendStatus(200);  
  }
  next();
});


const zPO_Report = require("./routes/Routes_zPO_Report.cjs");
const zPO_Summary = require("./routes/Routes_zPO_Summary.cjs")
app.use("/api/zPO_Report", zPO_Report);
app.use("/api/zPO_Summary", zPO_Summary);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
