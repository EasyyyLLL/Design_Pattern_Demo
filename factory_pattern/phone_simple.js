// 定义公共接口类
class Phone {
  constructor(name) {
    this.name = name
  }

  use() {}
}

// 定义具体产品类
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

class IPhone extends Phone {
  use() {
    console.log('正在使用iPhone')
  }
}

// 定义工厂类
class PhoneFactory {
  create(type) {
    switch(type) {
      case 'huawei':
        return new HuaweiPhone(type)
      case 'xiaomi':
        return new XiaomiPhone(type)
      case 'apple':
        return new IPhone(type)
    }
  }
}

const factory = new PhoneFactory()
const huawei = factory.create('huawei')
const xiaomi = factory.create('xiaomi')
const apple = factory.create('apple')

huawei.use()
xiaomi.use()
apple.use()
