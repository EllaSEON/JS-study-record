//products 버튼 클릭하면 tab-content에 show해줘라.
//기존에 있던 orange 버튼은 제거해야할듯


// 버튼 0을 누르면
document.querySelectorAll('.tab-button')[0].addEventListener('click', function () {

  // 모든 버튼에 붙은 orange 클래스명 제거
  document.querySelectorAll('.tab-button')[0].classList.remove("orange");
  document.querySelectorAll('.tab-button')[1].classList.remove("orange");
  document.querySelectorAll('.tab-button')[2].classList.remove("orange");
  // 버튼 0 에 orange 클래스명 추가
  document.querySelectorAll('.tab-button')[0].classList.add("orange");
  // 모든 div에 붙은 show 클래스명 제거
  document.querySelectorAll('.tab-content')[0].classList.remove('show');
  document.querySelectorAll('.tab-content')[1].classList.remove('show');
  document.querySelectorAll('.tab-content')[2].classList.remove('show');
  // div 0 에 show 클래스명 추가
  document.querySelectorAll('.tab-content')[0].classList.add('show');
  });

// 버튼 1을 누르면
document.querySelectorAll('.tab-button')[1].addEventListener('click', function () {

  // 모든 버튼에 붙은 orange 클래스명 제거
  document.querySelectorAll('.tab-button')[0].classList.remove("orange");
  document.querySelectorAll('.tab-button')[1].classList.remove("orange");
  document.querySelectorAll('.tab-button')[2].classList.remove("orange");
  // 버튼 1 에 orange 클래스명 추가
  document.querySelectorAll('.tab-button')[1].classList.add("orange");
  // 모든 div에 붙은 show 클래스명 제거
  document.querySelectorAll('.tab-content')[0].classList.remove('show');
  document.querySelectorAll('.tab-content')[1].classList.remove('show');
  document.querySelectorAll('.tab-content')[2].classList.remove('show');
  // div 1 에 show 클래스명 추가
  document.querySelectorAll('.tab-content')[1].classList.add('show');
  });