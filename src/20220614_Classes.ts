class Player {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

/* 자바스크립트에서는 아래와 같이 표현됨
class Player {
  construnctor (firstName, lastName, nickname) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
  }
}
*/

const jk = new Player("JK", "Kim", "JJJKKK");
console.log(jk.firstName); // -> private이기 때문에 보호됨
console.log(jk.nickname); // -> public만 호출 가능

// ============================================

abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string
  ) {}

  // 추상메소드는 추상클래스로부터 상속받은 모든 것을 구현해야함
  abstract getNickName(): void;

  // private 변수를 함수를 이용해 사용 가능함
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player2 extends User {
  getNickName() {
    // private 으로 보호되기 때문에 접근 불가
    // protected 으로 변경 시, 외부에서 접근은 안되지만 상속 시, 접근 가능
    console.log(this.nickname);
  }
}

// 추상클래스 생성하여 안전하게 사용 (외부 수정 불가함)
const js = new Player2("JS", "LEE", "JJJSSS");
console.log(js.getFullName());

/*
구분　　　선언한 클래스 내　상속받은 클래스 내　   인스턴스
private 　 　　　⭕　　　　　　　❌　　　　　     ❌
protected 　　　⭕　　　　　　　⭕　　　　　      ❌ 
public　　　　　⭕　　　　　　　⭕　　　　　      ⭕

*/
