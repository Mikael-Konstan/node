// 将字符串转为buffer对象
const testBuffer = Buffer.from("我是文本数据");
console.log(testBuffer);

// 将buffer对象转为字符串
console.log(testBuffer.toString());

// 创建具有相应大小的buffer对象
const buf = Buffer.alloc(10);
console.log(buf);

// 创建具有相应大小的buffer对象，但可能会含有敏感数据
const buf2 = Buffer.allocUnsafe(10);
console.log(buf2);
