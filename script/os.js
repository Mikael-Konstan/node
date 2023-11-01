const os = require('os')
const iFaces = os.networkInterfaces() // 获取本机网络信息
const ip = getIP(iFaces)

console.log(iFaces)
console.log(ip)

// 获取本机ip
function getIP(iFaces) {
  let ip = ''
  out: for (let i in iFaces) {
    for (let j in iFaces[i]) {
      let val = iFaces[i][j]
      if (val.family === 'IPv4' && val.address !== '127.0.0.1') {
        ip = val.address
        break out
      }
    }
  }
  return ip
}
