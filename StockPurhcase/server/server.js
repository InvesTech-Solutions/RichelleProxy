const express = require('express')
const app = express()
const db = require('../db/model.js')
var bodyParser = require('body-parser')


app.use('/:stockNameID', express.static(__dirname + '/../client/dist'));


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
 
 app.use(function (req, res, next) {
  console.log(req.method + ' @ '+ Date())
  next()
})
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/:stockNameID/info', (req, res) => {
  db.getOneStock(req.params.stockNameID, (err, data) => {
  	if(err){
  		res.sendStatus(404);
  	}else{
  		res.status(200).json(data);
  	}
  });
});

app.listen(3009, () => console.log('listening on port 3009!'))