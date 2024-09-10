/**
 * 订单状态
 */

const orderState = {
  1: '待支付',
  2: '已支付',
  3: '已发货',
  4: '已收货',
  5: '已取消',
}

/**
 * 订单状态的抽象接口
 */
class StateInterface {
  constructor(orderState, orderId, order) {
    this.orderState = orderState
    this.orderId = orderId
    this.order = order
  }

  pay() {
    console.error(`处于${orderState[this.orderState]}状态下，不可支付订单`);
  }

  ship() {
    console.error(`处于${orderState[this.orderState]}状态下，不可订单发货`);
  }

  recept() {
    console.error(`处于${orderState[this.orderState]}状态下，不可订单收货`);
  }

  cancel() {
    console.error(`处于${orderState[this.orderState]}状态下，不可取消订单`);
  }
}

/**
 * 创建订单状态
 */
class NewOrderState extends StateInterface {
  pay() {
    console.log(`id为${this.orderId}的订单已支付`);
    this.order.setState(2)
  }

  cancel() {
    console.log(`id为${this.orderId}的订单已取消`);
    this.order.setState(5)
  }
}

/**
 * 支付订单状态
 */
class PaidOrderState extends StateInterface {
  ship() {
    console.log(`id为${this.orderId}的订单发货`);
    this.order.setState(3)
  }

  cancel() {
    console.log(`id为${this.orderId}的订单已取消`);
    this.order.setState(5)
  }
}

/**
 * 发货订单状态
 */
class ShippedOrderState extends StateInterface {
  recept() {
    console.log(`id为${this.orderId}的订单已收货`);
    this.order.setState(4)
  }

  cancel() {
    console.log(`id为${this.orderId}的订单已取消`);
    this.order.setState(5)
  }
}

/**
 * 取消订单状态
 */
class CanceledOrderState extends StateInterface {
  cancel() {
    console.log(`id为${this.orderId}的订单不可重复取消`);
  }
}


/**
 * 订单类
 */
class Order {
  constructor() {
    this.orderId = null
    this.state = null
    this.orderState = null
  }

  create() {
    this.orderId = '0001'
    this.orderState = 1
    console.log(`id为${this.orderId}的订单已创建`)
    this.state = new NewOrderState(1, this.orderId, this)
  }

  setState(state) {
    this.orderState = state
    switch(state) {
      case 1:
        // 已创建，未支付
        this.state = new NewOrderState(state, this.orderId, this)
        return
      case 2:
        // 订单已支付
        this.state = new PaidOrderState(state, this.orderId, this)
        return
      case 3:
        // 订单已发货
        this.state = new ShippedOrderState(state, this.orderId, this)
        return
      case 5:
        // 订单已取消
        this.state = new CanceledOrderState(state, this.orderId, this)
        return
    }
  }

  checkOrder() {
    if (this.state) {
      return true
    } else {
      console.warn('订单未创建')
      return false
    }
  }

  pay() {
    if (this.checkOrder()) {
      this.state.pay()
    }
  }

  cancel() {
    if (this.checkOrder()) {
      this.state.cancel()
    }
    
  }

  ship() {
    if (this.checkOrder()) {
      this.state.ship()
    }
    
  }

  recept() {
    if (this.checkOrder()) {
      this.state.recept()
    }
    
  }
}

const order = new Order()
// order.setState(2)
// console.log(order);

order.create()
// console.log(order);
order.cancel()
order.pay()
// console.log(order);
order.ship()
