class Oberver {
  constructor(cb) {
    this.cb = cb
  }

  update() {
    this.cb()
  }
}

class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    const obIndex = this.observers.findIndex(item => item === observer)

    if (obIndex === -1) {
      throw Error('该观察者并没有订阅主题')
    } else {
      this.observers.splice(obIndex, 1)
    }
  }

  notify() {
    this.observers.forEach(observer => {
      observer.update()
    })
  }
}

const update1 = () => {
  console.log('Observer1 update');
}

const update2 = () => {
  console.log('Observer2 update');
}

const observer1 = new Oberver(update1)
const observer2 = new Oberver(update2)

const subject = new Subject()
subject.subscribe(observer1)
// subject.unsubscribe(observer2)
subject.subscribe(observer2)
subject.notify()
