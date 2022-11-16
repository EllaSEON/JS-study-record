var a = 10;
var b = 20;
var c = 30;

export {a}

export default a; //a라는 변수를 기본으로 export하겠습니다
//export default는 딱 1번만 쓸수있음.

//b도 export 하고 싶을때는? 여러개를 export하고 싶으면? 중괄호 안에 여러개 집어넣는다
export {b,c};