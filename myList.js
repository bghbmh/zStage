const express = require('express');
const app = express();
const fs = require('fs');
const qs = require('querystring');

const layout = require('./components/layout.js');

app.use(express.static('./'));

let html = '';
app.get('/', function (request, response) {

	// fs.readdir('./', function (error, filelist) {
	// 	console.log("filelist - ", filelist);
	// });
	//fs.readdir('./data', function (error, filelist) {
	let title = 'Welcome';

	try {
		// const jsonFile = fs.readFileSync('./public/data/test.json', 'utf8');
		// const jsonData = JSON.parse(jsonFile);

		let body = '';// card.type1.view(jsonData);

		// fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
		html = layout.adminMain(title, body);

		// });
	} catch (err) {
		console.log("오류 - ", err);
		html = layout.adminMain(title, err);
	}

	response.send(html);
	//});   rkdwp 
});

app.get('/creat', function (request, response) {

	console.log("만들기 creat - ");

	response.send("만들기 creat - ");
	//});   rkdwp
});

app.get('/updating', function (request, response) {

	console.log("updating11 - ", qs);
	console.log("updating22 - ", request.body );

	let title = 'after updating';


	const fileData = fs.readFileSync('./data/myList.json', 'utf8');

	let temp = JSON.parse(fileData);
	temp.push(request.body);

	fs.writeFileSync('./data/myList.json', JSON.stringify(temp));




	html = layout.adminMain(title, '');
	response.send(html);
});



app.listen(3131, function () {
	console.log('3131 - Example app listening on port 3131!')

});