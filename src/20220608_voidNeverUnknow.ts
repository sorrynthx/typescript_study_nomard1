let unknownA: unknown;

// 타입이 number일 경우에만 실행
if (typeof unknownA === "number") {
  let b = unknownA + 1;
}
// 타입이 string일 경우에만 string 함수 사용 가능
if (typeof unknownA === "string") {
  let b = unknownA.toUpperCase;
}

// =================================================

// void는 아무것도 반환하지 않음
function hell(): void {
  console.log("hell!!!");
}

// =================================================
// 절대 return하지 않을 때 -> exception에서 사용
function hellNever(): never {
  throw new Error("Never!!!");
}

// never 사용예제 (name은 string 또는 number)
function hellNever2(name: string | number) {
  if (typeof name === "string") {
    name; // string 명시
  } else if (typeof name === "number") {
    name; // number 명시
  } else {
    name; // never (정상이라면 실행되지 않음)
  }
}
