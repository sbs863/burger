var connection = require('./connection.js');

function objToSql(ob) {
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}


var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw ('Error in select all query' + err);
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) throw ('Error in creating query' + err);
            cb(result);
        });
    },
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?";
console.log(objToSql(objColVals));
// var a = ('UPDATE ' + table + ' SET ' + objToSql(objColVals) + ' WHERE ' + condition);
        connection.query(queryString, [table, (objToSql(objColVals)), condition], function(err, result){
            
            console.log(result);
            if (err) throw ('Error in update query' + err);
            cb(result);
        });
    }


};



module.exports = orm;