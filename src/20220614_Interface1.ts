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
