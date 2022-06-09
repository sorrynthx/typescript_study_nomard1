/* 다형성:
하나의 객체가 여러 가지 타입을 가질 수 있는 것 의미
*/

type SuperPrint = {
  // 일반적인 사용
  //(arr: number[]): void;
  //(arr: boolean[]): void;

  // 제네릭 사용
  // 어떤 타입이 사용될지 모를때, 확신이 없을 때,
  // 타입스크립트가 타입을 알아서 확인해서 정해줌
  //<TypePlaceHolder>(arr: TypePlaceHolder[]): void
  <T>(arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => {
  // return이 void일 경우
  // arr.forEach((i) => console.log(i));
  return arr[0];
};

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true, false]);

// error가 나야 정상이지만 제네릭을 사용하면 조합하여 사용 가능
const c = superPrint(["1", "2", "3", "4"]);
const d = superPrint([1, 2, true, false, "heelo"]);
