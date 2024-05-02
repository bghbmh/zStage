module.exports = {
	main: function (title, body) {
		return `
		<!doctype html>
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<title>WEB1 - ${title}</title>

				<!-- Stylesheets -->
				<link rel="stylesheet" type="text/css" href="/assets/css/common_test.css">
				<!-- // Stylesheets -->

				<script type="module" src="/assets/js/common.js"></script>
			</head>
			<body>

				<!-- header -->
				<header class="common2">
					<div class="hello2">
						<!-- <h1 class="logo">
							<a href="_index.html" title="logo" aria-label="">
								<small class="fs60">logo</small>
							</a>
						</h1> -->
						<h1 class="logo" aria-label="test">
							<!-- <a href="_index.html" title="test" aria-label="test"></a> -->
						</h1>
			
			
						<!-- <nav class="gnb2" data-target="cardList2">
							<ul class="tabType2" style="--x: 0; --w: 60;">
								<li><button type="button" class="btn on" aria-current="page" data-category="모두">test</button></li>
								<li><button type="button" class="btn" data-category="menu1">menu1</button></li>
								<li><button type="button" class="btn" data-category="menu2">메뉴_menu2</button></li>
								<li><button type="button" class="btn" data-category="menu3">menu3</button></li>
							</ul>
						</nav> -->
			
			
			
						<div class="contact2">
							<a href="tel:010-3469-1323" class="btn icon call" title="전화하기" aria-label="전화하기">
								<i class="icon-svg-phone-01" aria-hidden="true"></i>
								<!-- <span>010.3469.1323</span> -->
							</a>
							<a href="mailto:bghbmh@gmail.com" class="btn icon mail" title="메일보내기" aria-label="메일보내기">
								<i class="icon-svg-mail-01" aria-hidden="true"></i>
								<!-- <span>bghbmh@gmail.com</span> -->
							</a>
							<button type="button" class="btn icon" title="망했네" aria-label="망하는 데" data-ui-action="launch">
								<i class="icon-svg-rocket-02" aria-hidden="true"></i>
							</button>
						</div>
					</div>
			
				</header>
				<!-- // header -->
				<main class="common2">
					<nav class="hashmenu">
						<button type="button" class="btn hash">한글입숨</button>
						<button type="button" class="btn hash">test한글입숨</button>
					</nav>
					<section class="grid cardList2" data-pc-columns="3" data-tablet-columns="2" data-mobile-columns="1">
						<h2 class="hidden">category_0</h2>

						${body}
					</section>
				</main>

				<!--footer-->
				<footer class="common2">
					<div class="copyright">
						ⓒ test
						<span class="contact">
							<a href="tel:010-3469-1323" class="btn icon" aria-label="전화하기"><i class="fa-solid fa-mobile-screen-button"></i></a>
							<a href="mailto:bghbmh@gmail.com" class="btn icon" aria-label="메일보내기"><i class="fa-solid fa-envelope"></i></a>
						</span>
					</div>
				</footer>
				<!-- // footer  -->
				
			</body>
		</html>
		`;
	},
	sub: function (title, body) {
		return `
		<!doctype html>
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<title>WEB1 - ${title}</title>

				<link rel="stylesheet" type="text/css" href="/assets/css/upload.css">
				<script src="/assets/js/common.js"></script>
			</head>
			<body>
				${body}

			
			</body>
		</html>
		`;
	},
	adminMain: function (title, itemList) {
		return `
		<!doctype html>
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<title>mylist - ${title}</title>

				<link rel="stylesheet" type="text/css" href="public/assets/css/bootstrap.css">
				<link rel="stylesheet" type="text/css" href="public/assets/css/upload.css">
				<script type="module" src="public/assets/js/upload.js"></script>
				<script defer="" src="public/assets/fonts/fontawesome/js/all.js"></script>
			</head>
			<body>
				<main class="common">
					<div class="grid itemList testform" data-tablet-columns="2" data-mobile-columns="1">
						<div class="col12 header">
							<button type="button" data-ui-action="delete" class="btn" >삭제</button>
							<button type="button" data-ui-action="create" class="btn" >추가</button>
						</div>
						${itemList}
					</div>
				</main>
				
				<div id="alertMsg">!!!알림메시지!!!</div>
			</body>
		</html>
		`;
	},
	adminTest: function (title) {
		return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<title>Image Server_${title}</title>
		</head>
		<body>
			<form action="/upload" method="POST" enctype="multipart/form-data">
				Title: <input type="text" name="title1" />
				<input type="file" name="myFiles" multiple />
				<button type="submit">Upload</button>
			</form>
		</body>
		</html>
		`;
	},
	adminTest11: function (title) {
		return `
		<!doctype html>
		<html>
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<title>mylist - ${title}</title>

				<link rel="stylesheet" type="text/css" href="public/assets/css/bootstrap.css">
				<link rel="stylesheet" type="text/css" href="public/assets/css/upload.css">
				<script type="module" src="public/assets/js/upload.js"></script>
				<script defer="" src="public/assets/fonts/fontawesome/js/all.js"></script>
			</head>
			<body>

			<form action="/upload" method="POST" enctype="multipart/form-data">
				Title: <input type="text" name="title1" />
				<input type="file" name="myFiles" multiple />
				<button type="submit">Upload</button>
			</form>



				<main class="common">
					<div class="grid itemList testform" data-tablet-columns="2" data-mobile-columns="1">
						<div class="col12 header">
							test
						</div>



				<form class="col4 item editing" data-item-number="1">

					<!--
					Title: <input type="text" name="title1" />
					<input type="file" name="myFile1"  />
					-->

					<header class="d-flex">
						<label class="margin-left-auto" data-ui-action="toggle" title="메인에 보이게 할지말지 선택하는 버튼">
							<span class="guide">선택하기</span>
							<input type="checkbox" name="mainopen">
						</label>
					</header>
		
					<div class="cnts grid">
						<div class="col5 " >
							<div class="upload fileList type2 w-100per">
								<label class="btn" title="파일을 선택하세요" data-upload-id="main" data-ui-placeholder="파일을 선택하세요test">
									<span class="hidden">파일을 선택하세요</span>
									<input type="file" name="mimage" accept="image/*">
									<i class="fa-solid fa-plus" aria-hidden="true"></i>
								</label>
							</div>
		
							<div class="upload fileList type3 w-100per margin-top-1"> 
								<label class="btn" title="파일을 선택하세요" data-upload-id="sub"  data-ui-placeholder="파일을 선택하세요_testTest">
									<span class="hidden">파일을 선택하세요</span>
									<input type="file" name="simage" accept="image/*" multiple>
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
								<input type="text" placeholder="" name="title2" required >
							</label>
		
							<label class="w-100per">
								<span class="guide">test_샘플이름</span>
								<span class="error" aria-live="polite"></span>
								<input type="text" placeholder="test_샘플이름" name="sampleName" required>
							</label>
		
							<div class="upload type1 w-100per">
								<label class="btn" title="파일을 선택하세요" data-upload-id="file" data-ui-placeholder="">
									<span class="guide">test_샘플페이지</span>
									<input type="file" name="samplePage" multiple>
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
				</form>	








						
					</div>
				</main>
				
				<div id="alertMsg">!!!알림메시지!!!</div>
			</body>
		</html>
		`;
	}
}