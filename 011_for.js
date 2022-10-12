//products 버튼 클릭하면 tab-content에 show해줘라.
//기존에 있던 orange 버튼은 제거해야할듯


//자주 쓰는 seletor는 변수에 담는게 좋아.
const 버튼 = document.querySelectorAll('.tab-button');
const 컨텐트 = document.querySelectorAll('.tab-content');


// 버튼 0을 누르면
// 버튼[0].addEventListener('click', function () {

//   // 모든 버튼에 붙은 orange 클래스명 제거
//   버튼[0].classList.remove("orange");
//   버튼[1].classList.remove("orange");
//   버튼[2].classList.remove("orange");
//   // 버튼 0 에 orange 클래스명 추가
//   버튼[0].classList.add("orange");
//   // 모든 div에 붙은 show 클래스명 제거
//   컨텐트[0].classList.remove('show');
//   컨텐트[1].classList.remove('show');
//   컨텐트[2].classList.remove('show');
//   // div 0 에 show 클래스명 추가
//   컨텐트[0].classList.add('show');
//   });

// // 버튼 1을 누르면
// document.querySelectorAll('.tab-button')[1].addEventListener('click', function () {

//   // 모든 버튼에 붙은 orange 클래스명 제거
//   document.querySelectorAll('.tab-button')[0].classList.remove("orange");
//   document.querySelectorAll('.tab-button')[1].classList.remove("orange");
//   document.querySelectorAll('.tab-button')[2].classList.remove("orange");
//   // 버튼 1 에 orange 클래스명 추가
//   document.querySelectorAll('.tab-button')[1].classList.add("orange");
//   // 모든 div에 붙은 show 클래스명 제거
//   document.querySelectorAll('.tab-content')[0].classList.remove('show');
//   document.querySelectorAll('.tab-content')[1].classList.remove('show');
//   document.querySelectorAll('.tab-content')[2].classList.remove('show');
//   // div 1 에 show 클래스명 추가
//   document.querySelectorAll('.tab-content')[1].classList.add('show');
//   });

//   // 버튼 2을 누르면
// document.querySelectorAll('.tab-button')[2].addEventListener('click', function () {

//   // 모든 버튼에 붙은 orange 클래스명 제거
//   document.querySelectorAll('.tab-button')[0].classList.remove("orange");
//   document.querySelectorAll('.tab-button')[1].classList.remove("orange");
//   document.querySelectorAll('.tab-button')[2].classList.remove("orange");
//   // 버튼 2 에 orange 클래스명 추가
//   document.querySelectorAll('.tab-button')[2].classList.add("orange");
//   // 모든 div에 붙은 show 클래스명 제거
//   document.querySelectorAll('.tab-content')[0].classList.remove('show');
//   document.querySelectorAll('.tab-content')[1].classList.remove('show');
//   document.querySelectorAll('.tab-content')[2].classList.remove('show');
//   // div 2 에 show 클래스명 추가
//   document.querySelectorAll('.tab-content')[2].classList.add('show');
//   });




//for 반복문을 이용해서 만들어보자.

let 탭개수 = document.getElementsByTagName("li").length;

for (let i = 0; i<탭개수 ; i++){
  버튼[i].addEventListener('click', function () {
      // 모든 버튼에 붙은 orange 클래스명 제거

      버튼[0].classList.remove("orange");
      버튼[1].classList.remove("orange");
      버튼[2].classList.remove("orange");
      // 버튼 0 에 orange 클래스명 추가
      버튼[i].classList.add("orange");
      // 모든 div에 붙은 show 클래스명 제거
      컨텐트[0].classList.remove('show');
      컨텐트[1].classList.remove('show');
      컨텐트[2].classList.remove('show');
      // div 0 에 show 클래스명 추가
      컨텐트[i].classList.add('show');
      });
    };


// 위 문장을 함수로 만들어보자.
