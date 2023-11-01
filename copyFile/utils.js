const path = require('path');

const resolve = function (paths) {
    let root = path.resolve(__dirname, '../')
    return path.resolve(root, paths)
}

module.exports = {
    resolve
}
