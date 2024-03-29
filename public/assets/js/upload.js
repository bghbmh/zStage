import * as cf from './commonFunction.js';
//import * as component from './component.js';


import * as card from '../../../components/card.js';


document.addEventListener("DOMContentLoaded", () => {

	console.log("DOMContentLoaded upload", sessionStorage.getItem('testList') );

	let html = ``;
	cf.fileHandler._load({
		url: './data/myList.json',
		success: function (request) {

			console.log( request )

			if( !request.responseText ) {
				html = html + card.type1.view(null);
			} else {

				let itemsData = JSON.parse(request.responseText);
				for (let i = 0; i < itemsData.length; i++) {
					html = html + card.type1.view(itemsData[i]);
				}
	
				console.log(" request - ", itemsData);
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

			if (t.dataset.listener === "change") return;

			t.addEventListener("change", function (e) {
				let tmpPath = URL.createObjectURL(t.files[0]); // 파일 경로 가져오는건데.. 굳이 필요할까 싶음

				console.log("22222 type1 - ", t.value, tmpPath);

				let box = t.closest(".fileList") || t.parentNode.parentNode.querySelector(".fileList");
				box.dataset.imageId = t.parentNode.imageId;

				if ( box.classList.contains("type1")) {
					[...uploadImageType2(t.files).children].forEach(ch => box.appendChild(ch));
				} else {
					[...uploadImageType2(t.files).children].forEach(ch => box.insertBefore(ch, t.parentNode));
				}

				// 임시_리스너 한번만 붙이게, 추가 임시 설정함
				t.dataset.listener = 'change';
				// 삭제는 나중에하고 우선은 안보이게만 처리
				if (t.closest('.type2')) {
					t.parentNode.style.display = "none";
				};
				//setTimeout(() => {console.log("this is the third message") }, 1000) ;
			});

			break;
		case "submit":
			//console.log(" file - ", t);

			//showError(t.closest(".item").querySelector(".cnts").querySelectorAll('input'));
			let form = t.closest("form");
			let testFormdata =  new FormData();
			
			upload( checkedData(t.closest(".item"), testFormdata) );

			let testData = {};

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
async function upload(formData) {
	console.log("upload - test - ", formData)
	try {
		const response = await fetch("http://localhost:3300/updating", {
			method: "POST",
			body: formData,
		});
		const result = await response.json();
		console.log("성공:", result);
	} catch (error) {
		console.error("실패:", error);
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
		},
		redirect: "follow", // manual, *follow, error
		referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
	});
	return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}



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

	console.log(  " checkedData - ",fd );

	return fd;
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

					console.log(" editItem - ", editItem, JSON.stringify(editItem));


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
				class: 'uploading', 
				src: `${window.URL.createObjectURL(files[i])}`, 
				title: `${files[i].name}`, 
				"aria-label": `${files[i].name}`, 
				alt: `${files[i].name}` 
			});
			img.onload = function () {
				window.URL.revokeObjectURL(this.src);
			};
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

function calcFileSize(number) {
	if (number < 1024) {
		return number + "bytes";
	} else if (number >= 1024 && number < 1048576) {
		return (number / 1024).toFixed(1) + "KB";
	} else if (number >= 1048576) {
		return (number / 1048576).toFixed(1) + "MB";
	}
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
