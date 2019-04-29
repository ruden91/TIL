class IronManSuits {
  constructor({ name, aiName = "Jarvis" } = {}) {
    this.name = name;
    this.aiName = aiName;
    this.currFlightTimes = 0;
    this.maximumFlightTimes = 5;
    this.flying = null;
  }

  orderAI() {}

  flight() {
    console.log(`${this.name}! 비행시작!`);

    this.flying = setInterval(() => {
      this.currFlightTimes++;
      console.log(`${this.name}! ${this.currFlightTimes}분 비행중...`);
      if (this.currFlightTimes === this.maximumFlightTimes) {
        this.clearFlying();
      }
    }, 300);
  }

  clearFlying() {
    this.currFlightTimes = 0;
    clearInterval(this.flying);
    console.log(
      `${this.name} 최대 비행시간을 초과했습니다. 비행모드를 종료합니다.`
    );
  }

  useBasicWeapon() {
    console.log("기본 관통탄 미사일 사용!");
  }
}

const makeSuitMk1 = suit => {
  return suit;
};

const makeSuitMk6 = suit => {
  suit.maximumFlightTimes = 10;
  suit.useSmartMissile = () => {
    console.log("스마트 미사일 사용!");
  };

  return suit;
};

const makeSuitMk44 = suit => {
  suit.aiName = "F.R.I.D.A.Y";

  suit.callVeronica = talk => {
    switch (
      talk
      // ... 명령
    ) {
    }
  };

  suit.punch = () => {};

  suit.useLaserBeam = () => {
    console.log("레이저빔 사용!");
  };

  return suit;
};

const makeSuitMk50 = suit => {
  suit.maximumFlightTimes = 35;
  suit.aiName = "F.R.I.D.A.Y";

  suit.useLazerCutter = () => {
    console.log("레이저 커터 사용!");
  };

  suit.remoteControl = () => {
    console.log("원격 조종!");
  };

  suit.repairForYourSelf = () => {
    console.log("자가 수리 시스템");
  };

  suit.useSurfaceReforming = tool => {
    if (!tool) {
      console.log("변형실패 적절한 변형 타입을 알려주세요.");
      return;
    }
    console.log(`${tool} 변형완료. ${tool}을 사용합니다.`);
  };

  suit.thruster = () => {
    if (!suit.flying) {
      console.log("비행모드일 때 사용이 가능합니다.");
      return;
    }

    console.log(`추진기 사용! 마하 10 속도로 날아갑니다.`);
  };

  return suit;
};

const Mk1 = makeSuitMk1(new IronManSuits({ name: "MK.1" }));
const Mk6 = makeSuitMk6(new IronManSuits({ name: "MK.6" }));

const Mk44 = makeSuitMk44(new IronManSuits({ name: "MK.44" }));
const Mk50 = makeSuitMk50(new IronManSuits({ name: "MK.50" }));

Mk1.useBasicWeapon();
Mk1.flight();

Mk6.flight();

Mk44.useLaserBeam();
Mk50.useSurfaceReforming("스톰브레이커");
Mk50.repairForYourSelf();
Mk50.flight();
Mk50.thruster();
