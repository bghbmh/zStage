import * as cf from './commonFunction.js';
//import * as component from './component.js';


import * as card from '../../../components/card.js';


document.addEventListener("DOMContentLoaded", () => {

	console.log("DOMContentLoaded upload", sessionStorage.getItem('testList') );

	let html = ``;
	cf.fileHandler._load({
		url: './data/myList.json',
		success: function (request) {
			//console.log("load success - ", request )
			let itemsData = JSON.parse(request.responseText);

			if( !itemsData || !itemsData.length ) {
				html = html + card.type1.view(null);
			} else {
				for (let i = 0; i < itemsData.length; i++) {
					html = html + card.type1.view(itemsData[i]);
				}	
			}

			document.querySelector(".testform").innerHTML += html;
		},
		error: function (request) {
			console.log(" error - ", request);
			document.querySelector(".testform").innerHTML += card.type1.create();
		},
		loadType: "item",
		done: "items",
	});

	// cf.fileHandler._load( { 
	// 	url: './trtr.json',
	// 	success : function(request){
	// 		console.log(" trtr request - ", request );
	// 	}
	// });

	document.querySelector(".testform").addEventListener("click", itemListHandler);

});




// 키다운이나 포커스 들어갔을때 라벨 이동하는거, input에 required 속성 없을 떄 인터렉션 넣을방법, 구글 로그인 보고 참고하기, 예전에 만들어둔 파일 찾아보기 
window.URL = window.URL || window.webkitURL;

let aaaurl = window.URL;

const fileSelect = document.getElementById("fileSelect"),
	fileElem = document.getElementById("fileElem"),
	fileList = document.getElementById("fileList");

function introHandler(request) {
	console.log("test introHandler items", request.arguments, JSON.parse(request.responseText))
	let itemsData = JSON.parse(request.responseText);
}

function itemListHandler(e) {

	let t = e.target.closest('[type]') || e.target.closest('[name]');

	if (!t) return;

	//console.log("click elem : ", t.type," - ", t);

	switch (t.type) {
		case "file":

			t.addEventListener("change", function (e) {
				let tmpPath = URL.createObjectURL(t.files[0]); // 파일 경로 가져오는거

				console.log("22222 type1 - ", t.value, tmpPath);

				let box = t.closest(".fileList") || t.parentNode.parentNode.querySelector(".fileList");
				box.dataset.imageId = t.parentNode.imageId;

				if ( box.classList.contains("type1")) {
					[...uploadImageType2(t.files).children].forEach(ch => box.appendChild(ch));
				} else {
					[...uploadImageType2(t.files).children].forEach(ch => box.insertBefore(ch, t.parentNode));
				}

				if (t.closest('.type2')) {
					t.parentNode.style.display = "none";
				};
				
			},{ once: true});

			break;
		case "submit":
			
			e.preventDefault();
			//showError(t.closest(".item").querySelector(".cnts").querySelectorAll('input'));
			let form = t.closest("form");
			let testFormdata =  new FormData();
  
			// FormData 객체에 title1, myFile1 데이터 추가
			//testFormdata.append('title1', form.title1.value);
			//testFormdata.append('myFile1', form.myFile1.files[0]);

			//uploadJSON( checkedData(form, testFormdata) );


			let testData = {};
			//console.log("json check - ",JSON.stringify( checkedDataJson(form, testData) )  )

			uploadJSON( checkedDataJson(form, testData) );

			// form.addEventListener("formdata", (e) => {

			// 	console.log("formdata fired");

			// 	e.formData.append("TESTstart", "VALUEstart");

			// 	t.closest(".item").querySelectorAll('select').forEach(select => testData[select.name] = select.value);

			// 	console.log(t.type, " - ", aaaurl, testData, JSON.stringify(testData)); //JSON.stringify(testData)


			// 	sessionStorage.setItem('testList', JSON.stringify(testData));

				
			// 	// Get the form data from the event object
			// 	e.formData.append("testtesttestTEST", "testendendEND");

			// 	//const data = e.formData;
				
			
			// 	for (const [key, value] of e.formData) {
			// 		console.log("?? - ", key ," - ", value, value.length ? value.length : "xx");
			// 	}

			// 	// uploadpostData("https://example.com/answer", { answer: 42 }).then((data) => {
			// 	// 	console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
			// 	// });
							

			// });			

			//e.preventDefault();// 임시

			break;
		case 'button':
			buttonAction(t.closest('[data-ui-action]').dataset.uiAction, t.closest(".item"), '', this);
			break;
	}

}


// POST 메서드 구현 예제
async function uploadJSON(formdata) {

	console.log("upload - test - ", JSON.stringify(formdata), )
	fetch('http://210.101.173.162:3300/upload', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
			// 'Content-Type': 'multipart/form-data'
		},
		body: JSON.stringify(formdata) // body 부분에 폼데이터 변수를 할당
	})
	.then((response) => console.log(response))
	// .then((data) => {
	// 	console.log(data);
	// });

}


async function upload(formData) {
	console.log("upload - test - ", formData)
	try {
		const response = await fetch("http://210.101.173.162:3300/upload", {
			method: "POST",
			mode: 'cors',		
			body: formData,
		});
		//const result = await response.json();
		console.log("성공:", response);
	} catch (error) {
		console.log("실패:", error);
	}
}


async function uploadpostData(url = "", data = {}) {
	// 옵션 기본 값은 *로 강조
	const response = await fetch(url, {
		method: "POST", // *GET, POST, PUT, DELETE 등
		mode: "cors", // no-cors, *cors, same-origin
		cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
		credentials: "same-origin", // include, *same-origin, omit
		headers: {
			"Content-Type": "application/json",
			// 'Content-Type': 'application/x-www-form-urlencoded',
			// 'Content-Type': 'multipart/form-data'
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
	});
	return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}


//formdata 사용할때
function checkedData(form, fd){

	form.querySelectorAll('input')
		.forEach(input => {
			//console.log( input , " - ",input.type, input.name, input.checked );

			switch (input.type) {
				case "text":
				case "number":
					//testData[input.name] = input.value;
					fd.append(input.name, input.value);
					break;
				case "checkbox":
				case "radio":
					//testData[input.name] = input.checked;
					fd.append(input.name, input.checked);
					break;
				case "file":

					// if (!testData.hasOwnProperty(input.name)) {
					// 	testData[input.name] = [];
					// }

					// let filebox = input.parentNode.parentNode.querySelector(".fileList") || input.closest(".fileList");

					// let files = filebox.querySelectorAll(".item");

					// console.log("gggg - ", input.parentNode.dataset.uploadId, files);

					// let id = input.parentNode.dataset.uploadId;

					break;
				default:
					break;
			}

		});

	form.querySelectorAll(".fileList.type2 .imgfile").forEach( img => {
		const reader = new FileReader();
		fd.append('mainimgFile', img.file);
		
	});

	let testImgarr = [];
	form.querySelectorAll(".fileList.type3 .imgfile").forEach( (img, idx) => {
		const reader = new FileReader();

		console.log("sss - ", img.file)

		//testImgarr.push(img.file);
		fd.append('subimgFile', img.file);
		
		
	});
	//fd.append('subimgFile', testImgarr);
	
	console.log(" data -  ", fd)
	console.log(" testImgarr -  ", testImgarr)

	return fd;
}

// json 형태로 넘길때
function checkedDataJson(form, testData){

	form.querySelectorAll('input')
		.forEach(input => {
			//console.log( input , " - ",input.type, input.name, input.checked );

			switch (input.type) {
				case "text":
				case "number":
					testData[input.name] = input.value;
					break;
				case "checkbox":
				case "radio":
					testData[input.name] = input.checked;
					break;
				case "file":
					break;
				default:
					break;
			}

	});

	testData.image = [];
	form.querySelectorAll(".fileList.type2 .imgfile").forEach( img => {
		
		console.log("mainimg - ", img.file );
		testData.image.push({
			"template" : "main",
			"fileName": `${img.file.name}`,
			"fileSize": `${img.file.size}`,
		});
	});

	form.querySelectorAll(".fileList.type3 .imgfile").forEach( (img, idx) => {

		console.log("subimg - ", img.file);
		testData.image.push({
			"template" : "sub",
			"fileName": `${img.file.name}`,
			"fileSize": `${img.file.size}`,
		});		
		
	});

	console.log(" testData -  ", testData)

	return testData;
}



function buttonAction(action, nowItem, editItem = '', itemList) {
	console.log("button - ", action);

	switch (action) {
		case "edit":

			cf.fileHandler._load({
				url: './data/myList.json',
				success: function (request) {

					editItem = JSON.parse(request.responseText)
						.find(o => o.id === parseInt(nowItem.dataset.itemNumber));

					nowItem.outerHTML = card.type1.edit(editItem);

					sessionStorage.setItem('bmh', JSON.stringify(editItem));

					nowItem.classList.add("editing");

					//console.log(" editItem - ", editItem, JSON.stringify(editItem));


				}
			});
			break;
		case "cancle":
			console.log(" cancle sessionStorage - ", JSON.parse(sessionStorage.getItem('bmh')));
			nowItem.outerHTML = card.type1.view(JSON.parse(sessionStorage.getItem('bmh')));
			sessionStorage.removeItem('bmh');
			break;
		case "create":
			console.log(" create - ", card.type1.create());
			itemList.firstElementChild.after(card.type1.create());
			
			
			

			
			break;
	}
}



function testFileinfo(fileinfo) {
	let t = {};
	for (let key in fileinfo) t[key] = fileinfo[key];
	return t;
}


function showError(obj) {

	console.log(typeof obj, " - ", obj)

	obj.forEach(input => console.log(input, " - ", input.type, input.name, input.checked))

	if (email.validity.valueMissing) {
		// If the field is empty,
		// display the following error message.
		emailError.textContent = "You need to enter an email address.";
	} else if (email.validity.typeMismatch) {
		// If the field doesn't contain an email address,
		// display the following error message.
		emailError.textContent = "Entered value needs to be an email address.";
	} else if (email.validity.tooShort) {
		// If the data is too short,
		// display the following error message.
		emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
	}

	// Set the styling appropriately
	emailError.className = "error active";
}


function uploadImageType2(files) {

	console.log("handleFiles - ", files)
	let html = CreateElement({ tag: "div", class: "html-template" });

	if (!files.length) {
		html.innerHTML = `<label id="fileSelect" class="btn" data-ui-action="load" data-ui-placeholder="파일을 선택하세요test" aria-label="파일 선택 버튼" title="파일 선택 버튼">
						<input type="file" accept="image/*">
						<i class="fa-solid fa-plus" aria-hidden="true"></i>
					</label>`;
	} else {


		for (let i = 0; i < files.length; i++) {

			console.log("file 1개 222 - ", files[i], files[i].value);

			const figure = CreateElement({ tag: "figure", class: 'item' });
			// fileNew.appendChild(figure);
			figure.dataset.fileName = files[i].name;
			figure.dataset.fileSize = files[i].size;

			const img = CreateElement({ 
				tag: "img", 
				class: 'imgfile', // src: `${window.URL.createObjectURL(files[i])}`, 
				title: `${files[i].name}`, 
				"aria-label": `${files[i].name}`, 
				alt: `${files[i].name}` 
			});
			img.file = files[i];
			// img.onload = function () {
			// 	window.URL.revokeObjectURL(this.src);
			// };

			const reader = new FileReader();
			reader.onload = e => {
				img.src = e.target.result;
			};
			reader.readAsDataURL(files[i]);

			figure.appendChild(img);

			const figcaption = CreateElement({ tag: "figcaption", class: 'figcaption' });
			figcaption.innerHTML = `
				<dl class="option">
					<dt class="title">${files[i].name}</dt><dd>${calcFileSize(files[i].size)}</dd>
				</dl>`;

			figcaption.innerHTML += `
			<div class="ctrl">
				<button type="button" data-ui-action="delete" class="btn" title="파일 삭제 버튼" aria-label="파일 삭제 버튼"><i class="fa-solid fa-xmark"></i></button>
			</div>`;

			figure.appendChild(figcaption);
			html.appendChild(figure);
		}

	}

	return html;
}

function dragenter(e) {
	e.stopPropagation();
	e.preventDefault();
}

function dragover(e) {
	e.stopPropagation();
	e.preventDefault();
}

function drop(e) {
	e.stopPropagation();
	e.preventDefault();

	const dt = e.dataTransfer;
	const files = dt.files;

	handleFiles(files);
}

// function calcFileSize(number) {// KB는 1000 십진법 기준이라고 함, 그래서 이거는 1024로 나눴으니까 KB가 아니고 KiB 로 쓰는게 정확한 단위임
// 	if (number < 1024) {
// 		return number + "bytes";
// 	} else if (number >= 1024 && number < 1048576) {
// 		return (number / 1024).toFixed(1) + "KB"; 
// 	} else if (number >= (1024 * 1024) && number < (1024 * 1024 * 1024)) {
// 		return (number / 1048576).toFixed(1) + "MB";
// 	} else if (number >=  (1024 * 1024 * 1024)) {
// 		return (number / (1024 * 1024 * 1024) ).toFixed(1) + "GB";
// 	}
// }

function calcFileSize(number) {// 사이에 i 가 있는건 키 '비' 바이트라고 부른다함, 이게 1024 이진법 기준 계산이고
	const units = ["B",	"KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]; 
	const exponent = Math.min( Math.floor(Math.log(number) / Math.log(1024)), units.length - 1 );
	const approx = number / 1024 ** exponent;
	return exponent === 0 ? `${number} bytes` : `${approx.toFixed(1)} ${units[exponent]} (${number} bytes)`;
}

function CreateElement(attributes = {}) { // { tag : "div", class: "sample", ...} 
	if (!attributes.hasOwnProperty("tag")) return alert("no Tag, require the Tag");

	let tag = document.createElement(attributes.tag);
	for (let prop in attributes) {
		if (prop == "tag") continue;
		tag.setAttribute(prop, attributes[prop]);
	}
	return tag;
}
