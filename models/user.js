var sql = require("../config/db");

var User = function (User) {
    this.Name = User.Name;
    this.Address = User.Address;
    this.pincode = User.pincode;
    this.Id = User.Id;
    this.Items = User.Items;
};

User.getDataByField = function (field, result) {
    let sqlQuery = `select * from User where Name like "${field}%" or Address  like "${field}%" or Address  like "${field}%" or pincode  like "${field}%" or Items  like "${field}%" `;
    // console.log(sqlQuery);
    sql.query(sqlQuery, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
module.exports = User;
