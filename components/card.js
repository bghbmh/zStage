import * as cf from '../public/assets/js/commonFunction.js';

export let type1 = {

	//let item = items.find( o => o.id === parseInt(selectedItem) );
	//console.log("success - ", item );
	view: function (item) {
		if( !item ){
			return `
			<div class="col12 item">
				no item
			</div>
			`;
		}
		return `
		<div class="col4 item" data-item-number="${item.id}">
			<header class="d-flex">
				<label class="margin-right-auto" title="아이템선택하기">
					<span class="hidden">아이템선택하기</span>
					<input type="checkbox" name="testform">
				</label>

				${item.main ? '<span class="label blue">메인에서 보임</span>' : ''}
			</header>
			
			<div class="cnts grid">
				<div class="col5 " >
					<div class="upload fileList type2 w-100per">
						${imageType1(item.image, "main")}
					</div>

					<div class="upload fileList type3 w-100per margin-top-1"> <!-- 파일 업로드할때 -->
						${imageType1(item.image, "sub")}							
					</div>
						
				</div>

				<div class="col7 d-flex flex-column align-items-start ">
					<div class="w-100per" data-ui-placeholder>
						<span class="guide">test_titlexxx</span>
						<p>${item.category}</p>
					</div>

					<hr class="w-100per dot">

					<div class="w-100per">
						<span class="guide">test_해시태그</span>
						<p>
							${hashType(item.hash)}
						</p>
					</div>

					<hr class="w-100per dashed">

					<div class="w-100per">
						<span class="guide">test_제목</span>
						<p>${item.title ? item.title : ''}</p>
					</div>

					<hr class="w-100per dot">

					<div class="w-100per">
						<span class="guide">test_샘플이름</span>
						<p>${item.sampleName ? item.sampleName : ''}</p>
					</div>

					<hr class="w-100per dot">

					<div class="upload type1 w-100per"> 
						<span class="guide">test_샘플페이지</span>
						<div class="fileList">
							${item.samplePage ? sampleFile(item.samplePage) : ''}
						</div>
					</div>

				</div>
			</div>
			<footer class="">					
				<button type="button" data-ui-action="edit" class="btn" aria-label="수정하기 버튼" title="수정하기 버튼"><i class="fa-solid fa-pen" aria-hidden="true"></i></button>
				<button type="button"  data-ui-action="delete" class="btn" aria-label="삭제하기 버튼" title="삭제하기 버튼"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
			</footer>
		</div>
		`;
	},
	create: () => {
		let elem = cf.CreateElement( {
			tag : "form",
			class:"col4 item",
			name : "item"
		});
		elem.innerHTML = `
			<header class="d-flex">
				<label class="margin-left-auto" data-ui-action="toggle" title="메인에 보이게 할지말지 선택하는 버튼">
					<span class="guide">선택하기</span>
					<input type="checkbox" name="mainopen">
				</label>
			</header>

			<div class="cnts grid">
				<div class="col5 " >
					<div class="upload fileList type2 w-100per">
						<label class="btn" title="파일을 선택하세요" data-image-item="main" data-ui-placeholder="파일을 선택하세요test">
							<span class="hidden">파일을 선택하세요</span>
							<input type="file" name="image" accept="image/*">
							<i class="fa-solid fa-plus" aria-hidden="true"></i>
						</label>
					</div>

					<div class="upload fileList type3 w-100per margin-top-1"> 
						<label class="btn" title="파일을 선택하세요" data-image-item="sub"  data-ui-placeholder="파일을 선택하세요_testTest">
							<span class="hidden">파일을 선택하세요</span>
							<input type="file" name="image"accept="image/*" multiple>
							<i class="fa-regular fa-image" aria-hidden="true"></i>
						</label>						
					</div>
						
				</div>

				<div class="col7 d-flex flex-column align-items-start ">
					<label class="w-100per">	
						<span class="guide">test_titlexxx</span>						
						<input type="text" placeholder="" name="title" value="" required >
					</label>

					<label class="w-100per">	
						<span class="guide">test_해시태그</span>						
						<select name="category">
							<option value="default">카테고리</option>
							<option value="ca11">ca11</option>
							<option value="ca22">ca22</option>
						</select>
					</label>


					<label class="w-100per">	
						<span class="guide">test_제목</span>						
						<input type="text" placeholder="" name="title" required >
					</label>

					<label class="w-100per">
						<span class="guide">test_샘플이름</span>
						<span class="error" aria-live="polite"></span>
						<input type="text" placeholder="test_샘플이름" name="samplename" required>
					</label>

					<div class="upload type1 w-100per">
						<label class="btn" title="파일을 선택하세요" data-ui-template="list" data-ui-placeholder="">
							<span class="guide">test_샘플페이지</span>
							<input type="file" name="samplepage" multiple>
							<i class="fa-solid fa-paperclip" aria-hidden="true"></i>
						</label>

						<div class="fileList">
						</div>
					</div>

				</div>
			</div>
			<footer class="">					
				<button type="submit" class="btn" aria-label="저장하기 버튼" title="저장하기 버튼"><i class="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i></button>
				<button type="button"  data-ui-action="cancle" class="btn" aria-label="취소하기 버튼" title="취소하기 버튼"><i class="fa-solid fa-arrow-rotate-right" aria-hidden="true"></i></button>
			</footer>		
		`;
		return elem;
	},
	edit: (item) => {
		return `
			<form class="col4 item editing" data-item-number="${item.id}">
				<header class="d-flex">
					<label class="margin-left-auto" data-ui-action="toggle" title="메인에 보이게 할지말지 선택하는 버튼">
						<span class="">선택하기</span>
						<input type="checkbox" name="mainopen">
					</label>
				</header>

				<div class="cnts grid">
					<div class="col5 " >
						<div class="upload fileList type2 w-100per">
							<label class="btn" title="파일을 선택하세요" data-image-item="main" data-ui-placeholder="파일을 선택하세요test">
								<span class="hidden">파일을 선택하세요</span>
								<input type="file" name="image" accept="image/*">
								<i class="fa-solid fa-plus" aria-hidden="true"></i>
							</label>
							${imageType1edit(item.image, "main")}
						</div>

						<div class="upload fileList type3 w-100per margin-top-1"> 

							${imageType1edit(item.image, "sub")}

							<label class="btn" title="파일을 선택하세요" data-item="sub"  data-ui-placeholder="파일을 선택하세요_testTest">
								<span class="hidden">파일을 선택하세요</span>
								<input type="file" name="image"accept="image/*" multiple>
								<i class="fa-regular fa-image" aria-hidden="true"></i>
							</label>						
						</div>
							
					</div>

					<div class="col7 d-flex flex-column align-items-start ">
						<label class="w-100per">	
							<span class="guide">test_titlexxx</span>						
							<input type="text" placeholder="fill in" name="title" value="${item.category ? item.category : ''}" required >
						</label>

						<label class="w-100per">	
							<span class="guide">test_해시태그</span>						
							<select name="category">
								<option value="default">카테고리</option>
								<option value="ca11">ca11</option>
								<option value="ca22">ca22</option>
							</select>
						</label>


						<label class="w-100per">	
							<span class="guide">test_제목</span>						
							<input type="text" placeholder="fill in" value="${item.title ? item.title : ''}" name="title" required >
						</label>

						<label class="w-100per">
							<span class="guide">test_샘플이름</span>
							<span class="error" aria-live="polite"></span>
							<input type="text" placeholder="fill in" value="${item.sampleName ? item.sampleName : ''}" name="samplename" required>
						</label>

						<div class="upload type1 w-100per">
							<label class="btn" title="파일을 선택하세요" data-ui-template="list" data-ui-placeholder="">
								<span class="guide">test_샘플페이지</span>
								<input type="file" name="samplepage" multiple>
								<i class="fa-solid fa-paperclip" aria-hidden="true"></i>
							</label>

							<div class="fileList">
								${item.samplePage ? sampleFileedit(item.samplePage) : ''}
							</div>
						</div>

					</div>
				</div>
				<footer class="">					
					<button type="submit" class="btn" aria-label="저장하기 버튼" title="저장하기 버튼"><i class="fa-solid fa-cloud-arrow-up" aria-hidden="true"></i></button>
					<button type="button"  data-ui-action="delete" class="btn" aria-label="삭제하기 버튼" title="삭제하기 버튼"><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
					<button type="button"  data-ui-action="cancle" class="btn" aria-label="취소하기 버튼" title="취소하기 버튼"><i class="fa-solid fa-arrow-rotate-right" aria-hidden="true"></i></button>
				</footer>
			</form>
		`;
	}


}

function imageType1(items, str = '') {
	let html = '';
	items.find(o => {

		if (!str) {
			html += imageType1_html(o);
		} else if (o.imageItem === str) {
			html += imageType1_html(o);
		}
	});
	return html;
}


function imageType1_html(o) {
	return `<figure class="item">
				<img src="public/assets/img/contents/${o.fileName}">
				<figcaption class="figcaption">
					<dl class="option">
						<dt class="title">${o.fileName}</dt>
						<dd>${returnFileSize(o.fileSize)}</dd>
					</dl>
				</figcaption>
			</figure>`;
}


function sampleFile(item) {

	let html = "";

	for (let i = 0; i < item.length; i++) {
		html += `
		<figure class="item">
			<img src="${item[i]}">
			<figcaption class="figcaption">
				<dl class="option">
					<dt class="title">${item[i]}</dt>
					<dd>7.6KB</dd>
				</dl>
			</figcaption>
		</figure>
		`;

	}
	return html;
}



function imageType1edit(items, str = '') {
	let html = '';
	items.find(o => {

		if (!str) {
			html += imageType1edit_html(o);
		} else if (o.imageItem === str) {
			html += imageType1edit_html(o);
		}
	});
	return html;
}


function imageType1edit_html(o) {
	return `<figure class="item">
				<img src="public/assets/img/contents/${o.fileName}">
				<figcaption class="figcaption">
					<dl class="option">
						<dt class="title">${o.fileName}</dt>
						<dd>${returnFileSize(o.fileSize)}</dd>
					</dl>
					<div class="ctrl">
						<button type="button"  data-ui-action="delete" class="btn" aria-label="삭제하기 버튼" title="삭제하기 버튼"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
					</div>	
				</figcaption>
			</figure>`;
}

function sampleFileedit(item) {

	let html = "";

	for (let i = 0; i < item.length; i++) {
		html += `
		<figure class="item">
			<img src="${item[i]}">
			<figcaption class="figcaption">
				<dl class="option">
					<dt class="title">${item[i]}</dt>
					<dd>7.6KB</dd>
				</dl>
				<div class="ctrl">
					<button type="button"  data-ui-action="delete" class="btn" aria-label="삭제하기 버튼" title="삭제하기 버튼"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
				</div>	
			</figcaption>
		</figure>
		`;

	}
	return html;
}





function returnFileSize(number) {
	if (number < 1024) {
		return number + "bytes";
	} else if (number >= 1024 && number < 1048576) {
		return (number / 1024).toFixed(1) + "KB";
	} else if (number >= 1048576) {
		return (number / 1048576).toFixed(1) + "MB";
	}
}

function hashType(hash) {

	let html = "";

	for (let i = 0; i < hash.length; i++) {
		html += `<button type="button" class="btn hash" data-ui-hash="${hash[i]}">${hash[i]}</button>`;
	}
	return html;
}