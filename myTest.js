const express = require('express');
var cors = require('cors');
const app = express();
const fs = require('fs');
const qs = require('querystring');

const multer = require('multer');
var path = require('path');

var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// app.get('*', function (request, response, next) {
// 	fs.readdir('./data', function (error, filelist) {
// 		console.log("11  * filelist - ");
// 		request.list = filelist;
// 		next();
// 	});
// });







app.use(express.static('./'));
const layout = require('./components/layout.js');



const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		console.log("--- destination - ", file);
		cb(console.log("--- destination errrrrr - ", file), 'files/');
	},
	filename: function (req, file, cb) {
		
		cb(console.log("--- filename err - ", file), file.fieldname + '-' + Date.now())
	}
})
  
  const upload = multer({ storage: storage })




const uploadMiddleware = upload.single('myFile');

app.use(uploadMiddleware);

app.get("/", (request, response) => {

	response.send( layout.adminTest("test title", '') );
});

app.post('/updating', function (request, response, next) {
	// req.file 은 `avatar` 라는 필드의 파일 정보입니다.
	// 텍스트 필드가 있는 경우, req.body가 이를 포함할 것입니다.
	//request.testjson = 'post testTT';
	//frontdata = request.body;

	//const values = request.files.map((item) => console.log("33  middle? - ", item.filename) );


	console.log("--- request - ", request);

	//request.files  속성확인이 필요함_240328

	console.log("33  middle? - ", request.file );
	console.log("33  middle? - ", request.body);
	request.send('ok');

	//request.status(200).send('uploaded');
});



// app.get('/', function (request, response) {

// 	let title = 'Welcome';
// 	let post = request.body;

// 	try {

// 		request.testjson = 'post testTT';
// 		console.log("99  middle? - ", request.testjson, request.body);
// 		console.log("start - ", post);

// 		html = layout.adminTest(title, '');//layout.adminTest(title, '');

// 	} catch (err) {
// 		console.log("오류 - ", err);
// 		html = layout.adminTest(title, err);
// 	}

// 	response.send(html);

// });




function testFunc(){
	console.log("checked next function  - ") ;
}


// app.post( "/updating", uploadMiddleware, async (req, res) => {
	
// 	const values = req.files.map((item) => `public/${item.filename}`);

// 	return await new Promise((resolve, reject) => {
// 		connection.query(`INSERT INTO images (src) VALUES ?`, [values], (err, rows) => {
// 			if (err) reject(Error(err));
// 			resolve(rows);
// 		});
// 	});
// });









app.post('/create_process', function (request, response) {
	var post = request.body;
	var title = post.title;
	var description = post.description;

	request.testjson = 'post testTT';

	console.log("22  middle? - ", request.testjson, request.body.username);
	console.log("44  middle? - ", request);


	// fs.writeFile(`data/${title}`, description, 'utf8', function(err){
	//   response.writeHead(302, {Location: `/?id=${title}`});
	//   response.end();
	// });
});

app.listen(3300, function () {
	console.log('Example app listening on port 3300!')
});

