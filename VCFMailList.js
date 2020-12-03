const FS = require('fs')

FS.readFile('./word/wenzhou.txt', (err, data) => {
  if(err) throw err
  // console.log(data) // buffer 数据
  let phoneNumber = data.toString() // buffer => 字符串
  console.log(phoneNumber)
  let ary = phoneNumber.split('\r\n')
  console.log(ary)
  let arr = []
  ary.forEach(ele => {
    let str = ele.substr(0, 7)
    // console.log(str)
    for(let i = 0;i < 10;i++){
      for(let j = 0;j < 10;j++){
        arr.push(str + i + j + '85')
      }
    }
  })
  console.log(arr) // 合理的手机号 数组

  let vcfString = ''
  arr.forEach((ele, key) => {
    vcfString += 'BEGIN:VCARD' + '\r\n'
    vcfString += 'VERSION:3.0' + '\r\n'
    vcfString += 'N;CHARSET=gb2312:' + (key + 1) + '\r\n'
    vcfString += 'FN;CHARSET=gb2312:' + (key + 1) + '\r\n'
    vcfString += 'TEL;TYPE=CELL:' + ele + '\r\n'
    vcfString += 'END:VCARD' + '\r\n'
  })
  FS.writeFile('./word/vcfPhoneWenzhou.vcf', vcfString, err => {
    if(err) throw err
    console.log('文件已保存')
  })
})
// let data = FS.readFileSync('./word/wenzhou.txt')
// console.log(data)