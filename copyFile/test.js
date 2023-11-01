const path = require('path');
const { resolve } = require('./utils');
const { copyFile, copyFileDir } = require('./copyFile');
const copyFileApi = require('./copyFileOfClass');
const copyFileOfSync = require('./copyFileOfSync');

copyFileTest();
copyFileOfClass();
copyFileOfSyncTest();

function copyFileTest() {
    copyFile(resolve('static/aaaa/bbb/test.txt'), resolve('public/ccc/moveFile.sh'));

    copyFileDir(resolve('static/aaaa'), resolve('public/fff'));
}

function copyFileOfClass() {
    copyFileApi.copyFile(resolve('static/aaaa/bbb/test.txt'), resolve('public/ccc/moveFile.sh'));

    copyFileApi.copyFileDir(resolve('static/aaaa'), resolve('public/fff'));
}

function copyFileOfSyncTest () {
    // copyFileOfSync.copyFile(resolve('static/aaaa/bbb/test.txt'), resolve('public/ccc/test.txt'));

    copyFileOfSync.copyFileDir(resolve('static/aaaa'), resolve('public/fff')).then(() => {
        copyFileOfSync.copyFile(resolve('public/ccc/moveFile.sh'), resolve('public/fff/aaaa'))
    });

    // copyFileOfSync.copyFile(resolve('static/ccc/moveFile.sh'), resolve('public/fff/aaaa'))
}