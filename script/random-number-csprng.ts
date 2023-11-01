const randomNumber = require("random-number-csprng");
const path = require('path');

// Math.random() 并不是一个真正的随机数发生器。这是因为它是伪随机的
// 随着时间的推移，数字会开始重复，最终显示出非随机的模式
// 计算机很难生成真正的随机数

// random-number-csprng 范围内安全可靠随机数
// uuid > uuid.v4() API密钥或令牌ID
async function getRandomPort() {
    const num = await randomNumber(0, 3000);
    console.log('num', num);
    return Math.round(num) + 37000
}

getRandomPort().then(randomPort => {
    console.log('randomPort', randomPort);
});
