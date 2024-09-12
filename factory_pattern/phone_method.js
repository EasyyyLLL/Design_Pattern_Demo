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

// 定义基础工厂类
class PhoneFactory {
  createProduct() {}
}

// 定义具体工厂类
class HuaweiFactory extends PhoneFactory {
  createProduct() {
    return new HuaweiPhone('huawei')
  }
}

class XiaomiFactory extends PhoneFactory {
  createProduct() {
    return new XiaomiPhone('xiaomi')
  }
}

class AppleFactory extends PhoneFactory {
  createProduct() {
    return new IPhone('apple')
  }
}


const hFactory = new HuaweiFactory()
const huawei = hFactory.createProduct()

const xFactory = new XiaomiFactory()
const xiaomi = xFactory.createProduct()

const aFactory = new AppleFactory()
const apple = aFactory.createProduct()

huawei.use()
xiaomi.use()
apple.use()

