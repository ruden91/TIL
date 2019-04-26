/**
 * SubClass
 */

class Auth {
  validate(user) {
    return user.token === "123456";
  }
}

class ArcReactor {
  test() {
    console.warn("아크리액터 테스트완료");
  }
}

class Flight {
  test() {
    console.warn("비행능력 테스트완료");
  }
}

class Weapon {
  test() {
    console.warn("무기 사용성 테스트 완료");
  }
}

class Jarvis {
  initialize() {
    console.warn("자비스 준비완료");
  }
}

class IronManSuitsFacade {
  constructor(user) {
    this.user = user;
    this.complete = false;

    this.ArcReactor = new ArcReactor();
    this.Auth = new Auth();
    this.Flight = new Flight();
    this.Weapon = new Weapon();
    this.Jarvis = new Jarvis();
  }

  call() {
    if (this.Auth.validate(this.user)) {
      this.Jarvis.initialize();

      this.ArcReactor.test();
      this.Flight.test();
      this.Weapon.test();

      this.complete = true;
      console.warn("complete initial settings");
    } else {
      throw new Error("인증된 사용자가 아닙니다.");
    }
  }
}

const park = new IronManSuitsFacade({ token: "123456" });

park.call();
