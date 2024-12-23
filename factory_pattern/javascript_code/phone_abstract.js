// 定义手机产品抽象类
class Phone {
  constructor(name) {
    this.name = name
  }

  use() {}
}

// 定义手机产品具体类
class HuaweiPhone extends Phone {
  use() {
    console.log(`正在使用华为手机`)
  }
}

class XiaomiPhone extends Phone {
  use() {
    console.log('正在使用小米手机')
  }
}

class ApplePhone extends Phone {
  use() {
    console.log('正在使用iPhone')
  }
}

// 定义耳机产品抽象类
class Earphone {
  constructor(name) {
    this.name = name
  }

  play() {}
}

// 定义耳机产品具体类
class HuaweiEarphone extends Earphone {
  play() {
    console.log(`华为耳机正在播放`)
  }
}

class XiaomiEarphone extends Earphone {
  play() {
    console.log('小米耳机正在播放')
  }
}

class AppleEarphone extends Earphone {
  play() {
    console.log('airpods 正在播放')
  }
}

// 定义基础工厂类
class Factory {
  createPhone() {}

  createEarphone() {}
}

// 定义具体工厂类
class HuaweiFactory extends Factory {
  createPhone() {
    return new HuaweiPhone('huawei')
  }
  createEarphone() {
    return new HuaweiEarphone('huawei')
  }
}

class XiaomiFactory extends Factory {
  createPhone() {
    return new XiaomiPhone('xiaomi')
  }
  createEarphone() {
    return new XiaomiEarphone('xiaomi')
  }
}

class AppleFactory extends Factory {
  createPhone() {
    return new ApplePhone('apple')
  }
  createEarphone() {
    return new AppleEarphone('apple')
  }
}

const hFactory = new HuaweiFactory()
const huaweiPhone = hFactory.createPhone()
const huaweiEarphone = hFactory.createEarphone()

const xFactory = new XiaomiFactory()
const xiaomiPhone = xFactory.createPhone()
const xiaomiEarphone = xFactory.createEarphone()

const aFactory = new AppleFactory()
const applePhone = aFactory.createPhone()
const appleEarphone = aFactory.createEarphone()

huaweiPhone.use()
xiaomiPhone.use()
applePhone.use()

huaweiEarphone.play()
xiaomiEarphone.play()
appleEarphone.play()

