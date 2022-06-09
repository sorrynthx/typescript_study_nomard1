// overloading은 함수가 여러개의 call signatures를 가지고 있을 때 사용

// 함수 타입 선언
// 2개 또는 3개의 number 인자값을 받음
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

// 2개가 올 경우 마지막 인자값에 물음표(?)-optional 붙여서 사용 가능
// 파라미터 수가 다를 경우 사용
const add: Add = (a, b, c?: number) => {
  // c값이 있을 경우
  if (c) return a + b + c;
  else return a + b;
};

console.log(add(1, 2)); // 3 출력
console.log(add(1, 2, 3)); // 6 출력

// 보통 외부 라이브러리 사용 예
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else console.log(config.path, config.state);
};

// Next.js에서 쓰이는 방법 중 하나
push("/home");
push({ path: "/home", state: { 1: 1, 2: 2 } });
