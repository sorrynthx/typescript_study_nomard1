// readonly 만들기
type PlayerReadOnly = {
  readonly name: string;
  age?: number; // ? 입력 시, number 또는 undefined 을 갖는다
};

const playMakerReadOnly = (name: string): PlayerReadOnly => {
  return { name };
};

const jk = playMakerReadOnly("JK");
console.log(jk); // {name: JK}

// Cannot assign to 'name' because it is a read-only 에러 발생
// 자바스크립트에서는 허용하나 타입스크립트에서는 허용 안함
jk.age = 36;
jk.name = "Joe Kim";

// read only 에러 발생
const numbers: readonly number[] = [1, 2, 3];
numbers.push(1);
