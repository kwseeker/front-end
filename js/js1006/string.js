var str = 'hello world !';

//字符串长度
console.log(str.length);

//获取字符串中字符索引
var achar = 'a';        //97
var wchar = 'w';
console.log(achar.charCodeAt(), wchar.charCodeAt());
console.log(str.charCodeAt());
console.log(String.fromCharCode(97));

console.log(str.charAt(0));         //获取字符串索引为0处的字符
console.log(str.charCodeAt(str.length - 1));    //获取字符串最后一个字符的ASCII码

console.log(str.indexOf('o'));
console.log(str.lastIndexOf('o'));

//字符串截取
console.log(str.substr(0, 5));
console.log(str.substr(6));

console.log(str.substring(0, 6));
console.log(str.substring(6, 0));       //内部会自动对调6和0
console.log(str.substring(6));

console.log(str.slice(0, 6));
console.log(str.slice(6, 0));           //内部不会自动对调6和0
console.log(str.slice(6));

//转换大小写
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(0).toUpperCase() + str.substr(1));

//拆分成数组
var strArr = str.split(' ');
console.log(strArr);

var reqStr = "http://www.baidu.com?a=1";
var reqArr = reqStr.split('?');
console.log(reqArr[1].split('=')[0]);
console.log(reqArr[1].split('=')[1]);

//字符串替换
//敏感词替换
var sensitiveStr = "sb们,大家好,我是sb";
while(sensitiveStr.indexOf('sb') != -1) {
    sensitiveStr = sensitiveStr.replace('sb', '**');
}
console.log(sensitiveStr);
