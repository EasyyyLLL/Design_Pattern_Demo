# 策略模式

## 基本概念

**策略模式** ：将不同的算法或逻辑封装成独立的策略对象，使得这些策略对象可以在运行时根据需要进行切换或替换，从而实现灵活性和可扩展性。

* Context：封装上下文，维护对策略对象的引用，根据需要调用对应的策略，屏蔽外界对策略的直接调用，只对外提供一个接口。
* Strategy：抽象Strategy类，定义了所有具体策略的公共接口。
* ConcreteStrategy：具体Strategy类，封装了具体的算法、行为或方法，继承于抽象Strategy类，并且实现了抽象Strategy类的公共接口。
* StrategyMap：所有策略的合集，供封装上下文Context调用；


## 代码示例

1. 表单校验——valid_strategy
2. 购物车计价规则——goods_strategy
