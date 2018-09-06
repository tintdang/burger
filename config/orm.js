var connection = require("./connection.js")

var orm = {
    selectAll: function(table, cb){
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(table, col, val, cb){
        var queryString = `INSERT INTO ${table} (${col.toString()})VALUES (${/* insert quesiton marks ehre*/d})";`
        connection.query(queryString, val, function(err, result){
            if (err) throw err;

            cb(result);
        })
    },
    updateOne: function(table, obj, condition, cb){
        var queryString = `UPDATE ${table} SET ${/**/(obj)} WHERE ${condition}`
        
    }
}

module.exports = orm;