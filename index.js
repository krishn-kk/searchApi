require("dotenv").config();
const expres = require("express");
var mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const user = require("./routes/user");

const app = expres();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

var con = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
});

con.connect(function (err) {
    if (err) {
        console.log(err);
    } else console.log("Connected!");
});

app.use("/api", user);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`app is running at port :${port}`);
});
