const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const errRoutes = require("./routes/error");
const homeRoutes = require("./routes/base");
const cookieParser = require('cookie-parser');
const authRoutes = require("./routes/auth");


const cors = require("cors");
// const productsController = require('./controllers/error');
const express = require('express');
const app = express();
app.use(express.json());

var corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true
}
app.use(cors(corsOptions));
app.use(cookieParser());

//bodyParser
//extended: false
app.use(bodyParser.urlencoded({extended: true}));

// Images ***************************************************
// need help of package path
// const path = require('path');
// static folder to thing like image ...
// app.use(express.static(path.join(__dirname, 'public')));
//**********************************************************

// parse application/json
app.use(bodyParser.json());


app.use(authRoutes);
app.use(homeRoutes);
app.use(userRoutes);
app.use(errRoutes)


app.listen(3001);