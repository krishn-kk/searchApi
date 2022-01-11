const User = require("../models/User");

const getDataByField = (req, res) => {
    console.log("controller");
    const field = req.params;
    console.log(field);
    User.getDataByField(field.field, function (err, user) {
        if (err) res.send(err);
        res.status(200).json(user);
    });
};

module.exports = getDataByField;
