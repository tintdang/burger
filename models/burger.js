var orm = require("../config/orm.js")

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res) {
            cb(res)
        })
    },
    create: function(col, val, cb){
        console.log(col, val)
        orm.insertOne("burgers", col, val, function(res) {
            cb(res);
        });
    },
    update: function(){
        
    }
}

module.exports = burger;