var orm = require("../config/orm.js")

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res) {
            cb(res)
        })
    },
    create: function(){

    },
    update: function(){
        
    }
}

module.exports = burger;