
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/server.routes');

app.use(express.json());
app.use(cors());

app.get('/', router);

app.listen(3000, () =>{
    console.log("Server is running!");
});












