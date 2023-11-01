// abstract 抽象类   不能通过new实例化
// 抽象类中携带abstract标记的为抽象属性或抽象方法
// 抽象属性或方法   必须在子类中实现
abstract class BaseAbstract {
    // 静态属性   BaseAbstract.Static
    static Static = 'Static';

    // 私有属性   只能在类“BaseAbstract”中访问
    private Private = 'Private';

    // 受保护属性   只能在类“BaseAbstract”及其子类中访问
    protected Protected = 'Protected';

    // 公共属性    父类、子类、父类实例、子类实例均可访问
    public Public = 'Public';

    // 受保护抽象属性 子类必须实现的属性
    protected abstract ProtectedAbstract: string;
    // 公共抽象属性
    public abstract PublicAbstract: string;

    abstract testFn: () => void;

    constructor() {}

    log() {
        // console.log(this.Static)
        console.log(this.Private)
        console.log(this.Protected)
        console.log(this.Public)
        console.log(this.ProtectedAbstract)
        console.log(this.PublicAbstract)
        console.log(this.testFn)
    }
}

class Sub extends BaseAbstract {
    ProtectedAbstract = 'ProtectedAbstract'
    PublicAbstract = 'PublicAbstract'

    private SubPrivate = 'SubPrivate';

    log() {
        // 父类中保护属性 可以在子类中访问
        // console.log(this.Static)
        // console.log(this.Private)
        console.log(this.SubPrivate)
        console.log(this.Protected)
        console.log(this.Public)
        console.log(this.ProtectedAbstract)
        console.log(this.PublicAbstract)
        console.log(this.testFn)
    }
    testFn: () => {}
}

const obj = new Sub();

console.log(BaseAbstract.Static);
console.log(Sub.Static);
console.log(obj);
// console.log(obj.Static);
// console.log(obj.Private)
// console.log(obj.SubPrivate)
// console.log(obj.Protected)
console.log(obj.Public)
console.log(obj.ProtectedAbstract)
console.log(obj.PublicAbstract)
console.log(obj.testFn)
