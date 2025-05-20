# AC_Milan Custom Project
<a href="" target="_blank">
<img src="images/main-slider.png" alt="AC밀란 메인" width="100%"/>
</a>


</br>
</br>

### 🔍 주요특징
* GSAP을 활용한 스크롤 애니메이션 및 UI 요소 인터랙션 구현
* 모바일 메뉴 및 페이지 내 네비게이션 구현
* 특정 페이지 위치에 도달 시 트리거되는 애니메이션 효과 적용

</br>

### 🛠️ 사용 기술
|  |  |
|-----------------|-----------------|
| HTML5    |<img src="https://github.com/user-attachments/assets/2e122e74-a28b-4ce7-aff6-382959216d31" alt="HTML5" width="50">| 
| CSS3    |   <img src="https://github.com/user-attachments/assets/c531b03d-55a3-40bf-9195-9ff8c4688f13" alt="CSS3" width="50">|
| Javascript    |  <img src="https://github.com/user-attachments/assets/4a7d7074-8c71-48b4-8652-7431477669d1" alt="Javascript" width="50"> | 

</br>

### ⚙️ 기능 상세 설명

### 📌 1. 리사이즈 이벤트 처리
- 창 크기가 변경될 때 모바일과 데스크탑 뷰를 판단합니다. 
- 모바일 뷰일 경우 관련 클래스를 추가하고, 
- 데스크탑 뷰일 경우 클래스를 제거하여 레이아웃을 조정합니다.

 ``` JavaScript
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
```

---

</br>

### 📌 2. 초기화 및 섹션 리스트 설정
- 페이지 로드 시 signature ID를 제외한 섹션을 pageList 배열에 추가하여 
- 나중에 사용할 섹션 리스트를 준비합니다.

``` JavaScript
	window.dispatchEvent(new Event('resize'));
	sectionList.forEach(function(item){
		if(item.getAttribute("id")!= "signature"){
			pageList.push(item);
		}
	});
```
---

</br>

### 📌 3. 스크롤 이벤트 처리
- 사용자가 스크롤할 때 헤더의 고정 상태를 조정합니다.
- 스크롤 위치가 0보다 크면 헤더에 fixed 클래스를 추가하고,
- 최상단일 경우 클래스를 제거합니다.

<img src="images/heder.fixed.png" width="100%" alt="스크롤 이벤트 처리">

 ``` JavaScript
	window.addEventListener("scroll", function(){
		if(window.scrollY > 0){
			header.classList.add("fixed");
		}
		else{
			header.classList.remove("fixed");
		}
	});
```

---

</br>

### 📌 4. 탭 클릭 이벤트
- 탭을 클릭할 때 기본 동작을 방지하고,
- 모바일 뷰일 경우 탭의 상태를 변경하여 메뉴를 열거나 닫습니다.
- 탭 클릭 시 관련 클래스를 추가하거나 제거합니다.

<img src="images/mobile_menu.png" width="" alt="탭 클릭 이벤트">

 ``` JavaScript
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
```

---

</br>

### 📌 5. 메뉴 항목 클릭 이벤트
- 메뉴 항목 클릭 시 해당 섹션으로 부드럽게 스크롤 애니메이션을 진행합니다. 
- 스크롤이 완료되면 탭과 내비게이션 바의 상태를 초기화합니다.

 ``` JavaScript
	menuList.forEach(function(item, i){
		menuList[i].addEventListener("click", function(e){
			e.preventDefault();
			topPos=pageList[i].offsetTop;
			gsap.to(window, { scrollTo: topPos, duration: 0.4, onComplete: function(){
				tab.classList.remove("close");
				gnb.classList.remove("active");
				dim.classList.remove("active");
			}});
		});
	});
```

---

</br>

### 📱 모바일 반응형 이미지

| 모바일 메인페이지 | 모바일 메뉴 | 구단의 역사 |
|------------------|------------|-------------|
| ![](images/mobile_slider.png) | ![](images/mobile_menu.png) | ![](images/mobile_history.png) |


| 챔피언스컵 위너 | 발롱도르 위너 | 비지니스 구축 |
|------------------|------------|-------------|
| ![](images/mobile_champs.png) | ![](images/mobile_winners.png) | ![](images/mobile_business.png) |

</br>

### 🧾 Review

사이트 특징<br>
|---------------------|
탐색 용이성: 메뉴가 잘 구성되어 있어 사용자가 원하는 정보를 쉽게 찾을 수 있습니다.
모바일 최적화: 다양한 디바이스에서 접근할 수 있도록 반응형 디자인이 적용되었습니다.
빠른 로딩 속도: 사이트의 로딩 속도가 빠르며, 사용자에게 긍정적인 경험을 제공합니다.
상호작용 요소: 소셜 미디어 연동 등 팬과의 상호작용을 촉진하는 요소가 포함되어 있습니다.

</br>


이 프로젝트는 AC 밀란의 공식 웹사이트를 기반으로 하여<br> 클럽의 브랜드 아이덴티티를 반영한 사용자 친화적인 디자인을 제공합니다.
