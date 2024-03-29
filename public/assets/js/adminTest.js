import * as cf from './commonFunction.js';
//import * as component from './component.js';


import * as card from '../../../components/card.js';


document.addEventListener("DOMContentLoaded", () => {

	console.log("DOMContentLoaded upload", typeof document.querySelector("[type='file']").files);



});

const form = document.querySelector("#userinfo");

// async function sendData() {
// 	// Associate the FormData object with the form element
// 	const formData = new FormData(form);

// 	console.error("formData 머고 - ", formData);

// 	try {
// 		const response = await fetch("http://210.101.173.162:3300/updating", {
// 			method: "POST",
// 			// Set the FormData instance as the request body
// 			body: formData,
// 		});
// 		console.log("ㅁㅁㅁㅁㅁ 머고 - ", await response.json());
// 	} catch (e) {
// 		console.error("bbbbbb 머고 - ", e);
// 	}
// }

// // Take over form submission
// form.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	sendData();
// });



async function sendData(data) {

	console.log("DOMContentLoaded upload" )

	// Construct a FormData instance
	//const wow = {};
	//new FormData(form).forEach( (value, key) => wow[key] = value );
	//wow["뭔지궁금해서"] = "Pomegranate";

	// Add a text field
	//const myblob = new Blob( document.querySelector("[type='file']").files[0], { type: "image/*" });

	const formData = new FormData(form);
	//formData.enctype = "multipart/form-data";
	formData.append("뭔지궁금해서", "Pomegranate");

	[...document.querySelector("[type='file']").files].map( image => {
		console.log("testimage - ", image);
		formData.append("testimage", image);
	});
	

	// Add a file
	// const selection = await window.showOpenFilePicker();
	// if (selection.length > 0) {
	// 	const file = await selection[0].getFile();
	// 	formData.append("file", file);
	// }

	//console.error("formData 머고 - ", wow /* formData */ );

	console.error("formData 머고 - ", document.querySelector("[type='file']").files /* formData */ );

	try {

		console.log("okok 머고 ================= - ");

		const response = await fetch("http://210.101.173.162:3300/updating", {
			method: "POST",// Set the FormData instance as the request body			
			headers: {
				//"Content-Type": "application/json",
			},
			//body: JSON.stringify( wow),
			body : formData
		});
		//console.log("okok 머고 - ", await response.json());
	} catch (e) {
		console.error(e);
		console.error("none 머고 - ", e);
	}
}

const send = document.querySelector("#send");
send.addEventListener("click", sendData);