// 정해진 갯수, 순서에 맞는 타입 설정
// 변수: [타입 선언] = [기본값]
const tuplePlayer: [string, number, boolean] = ["tuplePlayer1", 1, true];

// any 는 타입스크립트는 빠져나가는 행위라고 보면 됨
const anyA: any[] = [1, 2, 3, 4];
const anyB: any = true;
console.log(anyA + anyB); // 1,2,3,4true 출력
