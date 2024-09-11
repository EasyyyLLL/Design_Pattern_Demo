class DiscountStrategy {
  constructor(rule) {
    this.rule = rule
  }
  calc(total) {}
}

class DiscountPriceStrategy extends DiscountStrategy {
  calc(total) {
    const { discount } = this.rule
    const realTotal = (1 - discount) * total
    return realTotal
  }
}

class FullMinus20Strategy extends DiscountStrategy {
  calc(total) {
    const { minTotal } = this.rule
    let realTotal = total

    if (total >= minTotal) {
      realTotal = total - 20
    } 

    return realTotal
  }
}

class FullMinus30Strategy extends DiscountStrategy {
  calc(total) {
    const { minTotal } = this.rule
    let realTotal = total

    if (total >= minTotal) {
      realTotal = total - 50
    } 

    return realTotal
  }
}

const strategyMap = {
  0: DiscountPriceStrategy,
  1: FullMinus20Strategy,
  2: FullMinus30Strategy
}

const getSrategy = (type) => {
  switch(type) {
    case 0:
      return new DiscountPriceStrategy({discount: .8})
    case 1:
      return new FullMinus20Strategy({minTotal: 200})
    case 2:
      return new FullMinus30Strategy({total: 300})
  }
}

class Goods {
  constructor(type, name, price, number) {
    this.type = type
    this.name = name
    this.price = price
    this.number = number
    this.strategy = getSrategy(type)
  }
}

class ShoppingCart {
  constructor() {
    this.goodsArr = []
  }

  addGoods(goods) {
    this.goodsArr.push(goods)
  }

  calculateTotal() {
    let totalMoney = 0
    const strategyNums = Object.keys(strategyMap).length
    const typeArr = new Array(strategyNums).fill(0).map(() => [])
    console.log('typeArr', typeArr)
    this.goodsArr.forEach(goods => {
      // console.log('goods.type', goods.type)
      // console.log('typeArr[goods.type]', typeArr[goods.type])
      typeArr[goods.type].push(goods)
    })
    console.log('typeArr', typeArr)

    for (let n = 0; n < strategyNums; n++) {
      let total = 0
      typeArr[n].forEach(goods => total = total + (goods.price * goods.number))
      const strategy = typeArr[n][0].strategy
      totalMoney = totalMoney + strategy.calc(total)
    }

    return totalMoney
  }
}

const goods1 = new Goods(0, "goods1", 160, 2)
const goods2 = new Goods(0, "goods2", 300, 2)
const goods3 = new Goods(1, "goods3", 40, 1)
const goods4 = new Goods(2, "goods4", 100, 2)
const goods5 = new Goods(1, "goods5", 80, 2)
const goods6 = new Goods(0, "goods6", 30, 3)
const goods7 = new Goods(1, "goods7", 80, 1)
const goods8 = new Goods(2, "goods8", 140, 1)

const shoppingcart = new ShoppingCart()
shoppingcart.addGoods(goods1)
shoppingcart.addGoods(goods2)
shoppingcart.addGoods(goods3)
shoppingcart.addGoods(goods4)
shoppingcart.addGoods(goods5)
shoppingcart.addGoods(goods6)
shoppingcart.addGoods(goods7)
shoppingcart.addGoods(goods8)

const total = shoppingcart.calculateTotal()
console.log('total', total)

