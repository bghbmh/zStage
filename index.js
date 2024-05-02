const express = require('express');
const fs = require('fs')
var cors = require('cors');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, 'public');
//app.use(express.static(publicPath));
app.use(express.static('./'));
app.use(cors());

const layout = require('./components/layout.js');

const multer = require('multer');
// const upload = multer({
// 	dest: 'files/'
// });
const upload = multer({
    storage: multer.diskStorage({
      	filename(req, file, done) {
          	//console.log("multer filename - ", file);
			done(null, file.originalname);
        },
		destination(req, file, done) {
      		//console.log("multer destination - ", file);
		    //done(null, path.join(__dirname, "public"));
			done(null, path.join(__dirname, "files"));
	    },
    }),
	//limits: { fileSize: 1024 * 1024 }
});

//const uploadMiddleware = upload.single('mainimgFile');
//const uploadMiddleware = upload.array("subimgFile");
const uploadMiddleware = upload.fields([
	{ name: "mainimgFile" },
	{ name: "subimgFile" }
]);


app.use((err, req, res, next) => {
	console.log("error middleware");
	console.log(err.toString());
	res.send(err.toString());
});

app.use(uploadMiddleware);
app.use(express.json());

app.get("/", (req, res) => {

	//response.send( layout.adminTest11("test title") );
	res.send(layout.adminMain("test title", '') )
});

app.post('/upload', (req, res) => {
    console.log("upload - ", req.body );
	//console.log("upload files - ", req.files );

	fs.readFile('./data/test.txt', 'utf8', (err, data) => {
		console.log(data);
	});


	const fileData = fs.readFileSync('./data/myList.json', 'utf8');
	let temp = JSON.parse(fileData);
	req.body.id = temp.length + 1;
	temp.push(req.body);

	fs.writeFileSync('./data/myList.json', JSON.stringify(temp));


    res.status(200).send('test uploaded');
});


app.listen(3300, () => {
    console.log('server is running at 3000');
});