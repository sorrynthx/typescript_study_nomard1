// 일반 자바스크립트 함수
function add1(a: number, b: number) {
  return a + b;
}

// ===> arrow function 으로 변경 (같은 뜻)
const add2 = (a: number, b: number) => {
  return a + b;
};

// 함수 타입을 선언
type Add_T = (a: number, b: number) => number;

// 또 다른 방법
type Add_T2 = {
  (a: number, b: number): number;
};

// 함수에 타입을 미리 설정하여 사용 가능
// 리턴에 {}쓰면 void 함수가 됨**
const add3: Add_T = (a, b) => a + b;
