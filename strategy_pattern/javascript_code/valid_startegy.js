class FormValidator {
  valid() {}
}

class MinLenValidator extends FormValidator {
  valid(value, rule, errMsg) {
    const minLen = rule.minLen
    if (value.length < minLen) {
      console.log(errMsg);
    } else {
      console.log('MinLenValidator 已通过');
    }
  }
}

class NotEmptyValidator extends FormValidator {
  valid(value, rule, errMsg) {
    const isTrim = rule.isTrim

    if ((isTrim && value.trim() === '') || (value === '')) {
      console.log(errMsg);
    } else {
      console.log('NotEmptyValidator 已通过');
    }
  }
}

class NumberValidator extends FormValidator {
  valid(value, rule, errMsg) {
    if (isNaN(parseInt(value))) {
      console.log(errMsg);
    } else {
      console.log('NumberValidator 已通过');
    }
  }
}

const validatorMap = {
  'notEmpty': new NotEmptyValidator(),
  'minLen': new MinLenValidator(),
  'number': new NumberValidator()
}


class Validator {
  constructor() {
    this.validatorGroup = []
    this.value = []
    this.rule = []
    this.errMsg = []
  }

  addValidator (type, value, errMsg, rule) {
    this.validatorGroup.push(validatorMap[type])
    this.value.push(value)
    this.errMsg.push(errMsg)
    this.rule.push(rule || {})
  }

  valid() {
    this.validatorGroup.forEach((validator, index) => validator.valid(this.value[index], this.rule[index], this.errMsg[index]))
  }
}

const validator = new Validator()
validator.addValidator('notEmpty', '  ', '输入不能为空', {isTrim: true})
validator.addValidator('number', '4', '输入内容不能是非数字')
validator.addValidator('minLen', 'ljx', '不得小于5个字符', {minLen: 5})

validator.valid()



