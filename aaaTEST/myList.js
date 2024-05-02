const express = require('express');
const app = express();
const fs = require('fs');
const qs = require('querystring');

const layout = require('../components/layout.js');



const multer = require('multer');

const upload = multer({
	dest: './public/assets/img/contents/'
});
const uploadMiddleware = upload.single('myFile');
app.use(uploadMiddleware);

app.use(express.static('./'));

app.use(express.json());

// const session = require("express-session");
// const MemoryStore = require("memorystore")(session);

let html = '';
app.get('/', function (request, response) {

	// fs.readdir('./', function (error, filelist) {
	// 	console.log("filelist - ", filelist);
	// });
	//fs.readdir('./data', function (error, filelist) {
	let title = 'Welcome';

	let post = request.body;

	console.log("nodejs 확인중 - ", title);

	try {

		console.log("updating - ", post);
		// const jsonFile = fs.readFileSync('./public/data/test.json', 'utf8');
		// const jsonData = JSON.parse(jsonFile);

		let body = '';// card.type1.view(jsonData);

		// fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description) {
		html =  layout.adminMain(title, body) ;//layout.adminTest(title, '');

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
	console.log("updating22 - ", request.query );

	let title = 'after updating';

	response.status(200).send('test uploaded');


	// const fileData = fs.readFileSync('./data/myList.json', 'utf8');

	// let temp = JSON.parse(fileData);
	// temp.push(request.body);

	// fs.writeFileSync('./data/myList.json', JSON.stringify(temp));




	// html = layout.adminMain(title, '');
	// response.send(html);
});


//app.use(express.json()); 
//app.use(express.urlencoded({extended: false }) );


app.post('/updating', function (request, response) {
	let title = 'after updating';


	let post = request.file;
	
	console.log("updating222 - ", post);

	//response.redirect(`/`);
	//response.status(200).send('uploaded');

	html = layout.adminTest(title, '');
	response.send(html);



	// fs.rename(`data/${id}`, `data/${title}`, function (error) {
	// 	fs.writeFile(`data/${title}`, description, 'utf8', function (err) {
	// 		response.redirect(`/?id=${title}`);
	// 	})
	// });
});



// app.post('/updating', function (request, response) {

// 	let title = 'after updating';
// 	let str = '';

// 	var contentType = request.headers['content-type'];
//     console.log('contentType: ', contentType);
	
// 	var buffer = "";
// 	request.on('data', function (data) { //설명6
// 		buffer += data.toString();
// 	});
// 	request.on("end", function() {
// 		console.log('buffer: ', buffer);
// 	})

// 	//response.render(' result - ', request.body)

// 	response.send(`<div>test</div><div>${request.body}</div>`);

// 	// const fileData = fs.readFileSync('./data/myList.json', 'utf8');
// 	// let temp = JSON.parse(fileData);


// 	// console.log('item numner - ', temp.length)

// 	// if( !request.body.id ) request.body.id = temp.length ;

// 	// temp.push(request.body);
// 	// fs.writeFileSync('./data/myList.json', JSON.stringify(temp));

// 	// html = layout.adminMain(title, '');
// 	// response.send(html);



// 	// request.on('data', function (data) { //설명6
// 	// 	str += data;
// 	// });
// 	// request.on('end', function () { //설명7

// 	// 	const fileData = fs.readFileSync('./data/myList.json', 'utf8');
// 	// 	let temp = JSON.parse(fileData);
// 	// 	temp.push(str);
// 	// 	fs.writeFileSync('./data/myList.json', JSON.stringify(temp));
// 	// 	html = layout.adminMain(title, '');		
		
// 	// 	response.send(html);
// 	// });






// });






app.listen(3131, function () {
	console.log('3131 - Example app listening on port 3131!')

});