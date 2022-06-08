// player 타입 선언
type Player = {
  name: string;
  age?: number; // ? 입력 시, number 또는 undefined 을 갖는다
};

// 타입 적용
const player1: Player = {
  name: "Jack",
  age: 25
};

const player2: Player = {
  name: "Jacob",
  age: 35
};

const player3: Player = {
  name: "Mike"
};

// 조건부(?) 있을 때, ===> if문에 player1.age && 같이 입력해야 에러 없음
if (player1.age && player1.age < 40) {
  console.log(player1.age); // 25
}

if (player2.age && player2.age < 40) {
  console.log(player2.age); // 35
}

if (player3.age && player3.age < 40) {
  console.log(player3.age); // 로그 출력 x
}

// 함수에 타입 적용
function playerMaker1(name: string): Player {
  return {
    name: name
  };
}
// 함수에 타입 적용
const playerMaker2 = (name: string): Player => {
  return { name };
};

const alice = playerMaker1("Alice");
alice.age = 20;
console.log(alice);

const jane = playerMaker2("Jane");
jane.age = 22;
console.log(jane);
