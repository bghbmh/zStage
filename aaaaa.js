const express = require('express');
const app = express();
const fs = require('fs');
const qs = require('querystring');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
//const layout = require('./components/layout.js');
function layout(title, body){
    return `
		<!doctype html>
		<html>
		<head>
			<title>WEB1 - ${title}</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
			<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		</head>
		<body>
			<h1><a href="/">${title}</a></h1>

			<br><br>
			<hr>
			${body}
			<hr> 
			<br><br>
			
			<form action="/create_process" method="post">
				<p><input type="text" name="title" placeholder="title"></p>
				<p>
					<textarea name="description" placeholder="description"></textarea>
				</p>
				<p>
					<input type="submit">
				</p>
			</form>
		</body>
		</html>
    `;
};

app.get('*', function (request, response, next) {
	fs.readdir('./data', function (error, filelist) {
		console.log("filelist - ", filelist);
		request.list = filelist;
		next();
	});
});



app.get('/', function (request, response) {
	var title = 'Welcome';
	var description = 'Hello, Node.js';
	var html = layout(title, 
		`<h2>${title}</h2>${description}`,
		`<a href="/create_process">create_process</a>`
	);

	console.log("middle? - ", request.list);
	response.send(html);
});

app.post('/create_process', function(request, response){
	var post = request.body;
	var title = post.title;
	var description = post.description;
	fs.writeFile(`data/${title}`, description, 'utf8', function(err){
	  response.writeHead(302, {Location: `/?id=${title}`});
	  response.end();
	});
});

app.listen(3300, function() {
	console.log('Example app listening on port 3300!')
  });