type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

interface Player {
  nickname: string;
  team: Team;
  health: Health;
}

const nico: Player = {
  nickname: "nnnnik",
  team: "red",
  health: 10
};

// 인터페이스는 타입스크립트에게 오프젝트의 모양을 설명해주시기 위해 존재.
// type도 비슷하지만 인터페이스보다 더 활용도가 높음
// 상속받는 클래스가 어떻게 동작해야할지 알려주기 위해 추상클래스 사용

interface UserA {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

class PlayerA implements UserA {
  constructor(public firstName: string, public lastName: string) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `${this.lastName}`;
  }
}

/*

Type Aliases과 Interfaces의 차이점

Type Aliases과 인터페이스는 매우 유사하며 많은 경우 자유롭게 선택할 수 있습니다. 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 
반면 인터페이스는 항상 확장 가능합니다.

결론: 대부분의 경우 개인 취향에 따라 선택 가능
(인터페이스 사용을 조금 더 추천)

*/
