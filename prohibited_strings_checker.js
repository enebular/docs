const fs = require('fs');

const fileEncoding = 'utf-8';

var targetFileName;
var prohibitedString;
var startTag;
var endTag;
var rawHtml; 

var main = () => {
    if (process.argv[2]) {
        targetFileName = process.argv[2];
    } else {
        console.log('第一引数にファイル名を指定してください');
        process.exit(2);
    }

    if (process.argv[3]) {
        prohibitedString = process.argv[3];
    } else {
        console.log('第二引数に禁止する文字列を指定してください');
        process.exit(2);
    }

    fs.readFile(targetFileName, fileEncoding, (err, data) => {
        if (err) { 
            throw err; 
        } else {
            rawHtml = data;
        }

        startTag = '<script';
        endTag = '</script>'
        rawHtml = deleteBlocks(startTag, endTag, rawHtml);

        if(isContained(prohibitedString, rawHtml)) {
            console.log(`${targetFileName}で、禁止文字「${prohibitedString}」が使用されています！`);
            process.exit(2);
        }else{
            process.exit(0);
        };
    });
}

var isContained = (prohibitedString, target) => {
    if (target.search(prohibitedString) !== -1) {
        return true;
    }else {
        return false;
    }
}

var deleteBlocks = (startTag, endTag, target) => {
    while (target.search(startTag) !== -1) {
        var scriptBlock = target.slice(target.search(startTag), target.search(endTag) + endTag.length);
        target = target.replace(scriptBlock, '');
    }
    return target;
}

main();