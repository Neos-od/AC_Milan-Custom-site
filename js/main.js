window.addEventListener("load", function(){
	let start=document.querySelector("#start");
	let header=document.querySelector("#header");
	let gnb=document.querySelector("#nav");
	let menuList=gnb.querySelectorAll("li");
	let sectionList=document.querySelectorAll("section");
	let menuArea=header.firstElementChild; // #header .menu_zone
	let tab=menuArea.querySelector(".tab");
	let dim=document.querySelector(".dimmed");
	let isMobile
	// 빈 배열로 페이지 리스트를 작성합니다.
	let pageList=[start];

	window.addEventListener("resize", function(){
		if(window.innerWidth > 720){
			if(isMobile != false){
				isMobile=false;

				tab.classList.remove("close");
				gnb.classList.remove("active");
				dim.classList.remove("active");
			}	
		}
		else{
			if(isMobile != true){
				isMobile=true;
			}
		}
	});

	window.dispatchEvent(new Event('resize'));

	sectionList.forEach(function(item){
		// id 값이 signature가 아닐 경우,
		if(item.getAttribute("id")!= "signature"){
			// push는 뒤에 영역에 배열자로 추가합니다.
			pageList.push(item);
		}
	});

	// console.log(pageList); // #header #business

	window.addEventListener("scroll", function(){
		if(window.scrollY > 0){
				header.classList.add("fixed");
		}
		else{
			 	header.classList.remove("fixed");
		}
	});

	function controlMenu(i){
		menuList.forEach(function(item, j){
			if(j == i){
				item.classList.add("active");
			}
			else{
				item.classList.remove("active");
			}
		});
	}
	
	pageList.forEach(function(item, i){
		gsap.timeline({
			scrollTrigger: {
				trigger: item,
				start: "top center",
				end: "bottom center",
				onEnter: function(){
				controlMenu(i);
				},
				onEnterBack: function(){
				controlMenu(i);
				}
			}	
		});
	});

	// tab
	let topPos=0;

	tab.addEventListener("click", function(e){
		e.preventDefault();

		if(isMobile == true){
			if(tab.classList.contains("close") == false){
				tab.classList.add("close");
				gnb.classList.add("active");
				dim.classList.add("active");
			}
			else{
				tab.classList.remove("close");
				gnb.classList.remove("active");
				dim.classList.remove("active");
			}
		}
 	});

	menuList.forEach(function(item, i){
		menuList[i].addEventListener("click", function(e){
			 e.preventDefault();

			 topPos=pageList[i].offsetTop; // offseTop : 상단위치

			 // console.log(topPos);
			 gsap.to(window, { scrollTo: topPos, duration: 0.4, onComplete: function(){
				tab.classList.remove("close");
				gnb.classList.remove("active");
				dim.classList.remove("active");
		 }});
		});
	});

	// GSAP 애니메이션을 카테고리마다 지정합니다. // 글자 띄우기

 	// header
 	const startTl=gsap.timeline();

 	startTl.fromTo(".text_zone h3", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.8 });
 	startTl.fromTo(".text_zone strong", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
 	startTl.fromTo(".text_zone .more", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });

	// business
	let businessList=document.querySelectorAll("#business li");

	const businessTl=gsap.timeline({
		scrollTrigger: {
			trigger: "#business",
			start: "top center",
			end: "bottom center"
		}
	});

	businessList.forEach(function(item, i){
		if(i%2 == 0) { // 짝수
			businessTl.from(item, { y: 100, opacity: 0, duration: 0.5 });
		}
		else{ // 홀수
			businessTl.from(item, { y: -100, opacity: 0, duration: 0.5 });
		}
	});

  // portfolio
	let portfolioList=this.document.querySelectorAll("#portfolio li");

	const portfolioTl=gsap.timeline({
	 scrollTrigger: {
		 trigger: "#portfolio",
		 start: "top center",
		 end: "bottom center"
	 }
	});

	portfolioList.forEach(function(item, i){
	 if(i%1 == 0) {
		 portfolioTl.from(item, { x: -100, opacity: 0, duration: 0.4 });
	 }
	 else{
		 portfolioTl.from(item, { x: 100, opacity: 0, duration: 0.4 });
	 }
	});	

	// history
	let historyList=this.document.querySelectorAll("#history li");

	const historyTl=gsap.timeline({
		scrollTrigger: {
			trigger: "#history",
			start: "top center",
			end: "bottom center"
		}
	 });
 
	 historyList.forEach(function(item, i){
		if(i%2 == 0) {
			historyTl.from(item, { x: -100, opacity: 0, duration: 0.5 });
		}
		else{
			historyTl.from(item, { x: 100, opacity: 0, duration: 0.5 });
		}
 	});

	// awards
	let awardsList=this.document.querySelectorAll("#awards li");

	const awardsTl=gsap.timeline({
		scrollTrigger: {
			trigger: "#awards",
			start: "top center",
			end: "bottom center"
		}
	 });
 
	 awardsList.forEach(function(item, i){
		if(i%1 == 0) {
			awardsTl.from(item, { y: 100, opacity: 0, duration: 0.5 });
		}
		else{
			awardsTl.from(item, { y: -100, opacity: 0, duration: 0.5 });
		}
 	});

	// contact_us
	const contact_usTl=gsap.timeline({
		scrollTrigger: {
			trigger: "#contact_us",
			start: "top center",
			end: "bottom center"
		}
	});

	contact_usTl.fromTo("#contact_us strong", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
	contact_usTl.fromTo("#contact_us span", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
	contact_usTl.fromTo("#user", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.2 });
	contact_usTl.fromTo("#email", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.2 });
	contact_usTl.fromTo("#subject", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.2 });
	contact_usTl.fromTo("#text_wrap", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.2 });
	contact_usTl.fromTo(".bot .btn", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
});
