var connection = require('./network.js');
var faker = require('faker');



connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
	console.log('connected as id ' + connection.threadId + ' @ '+ Date());
});


var getOneStock = (stockid, callback) => {
	connection.query('SELECT * from stockprice where id = ?',[stockid], function (error, results, fields) {
		if(error){
			callback(error)
		}else{
			callback(null, results);
		}
	});
}

var insertInitialData = () => {
	for (var i = 100; i > 0; i--) {
		var spread = Math.random()*0.15/2;//the biggest bid and ask spread on according the efts on vanguard 
		var prev_price = Number(faker.finance.amount());
		var cur_price = Number(faker.finance.amount());
		var insertArr = [faker.company.companyName(), cur_price - spread, Math.ceil(Math.random()*1700), cur_price + spread, Math.ceil(Math.random()*1700), cur_price, prev_price]
		var query = 'INSERT INTO stockprice (stock_name, bid, bid_volume, ask, ask_volume, current_price, prev_price) VALUES(?, ?, ?, ?, ?, ?, ?)';
		connection.query(query, insertArr, function (error, results, fields) {
		  if (error) throw error;
		  console.log('The solution is: ', results);
		});
	}
}

module.exports = {getOneStock};

// insertInitialData()
// getOneStock(1, console.log);