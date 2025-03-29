var date = new Date();
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toUTCString());
console.log(date.toDateString());

function toTwo(v) {
    return v < 10 ? '0' + v : v;
}
function dateToString(d) {
    // 常用日期对象方法
    var y = d.getFullYear();            // 年
    var m = toTwo(d.getMonth() + 1);    // 0-11 0代表1月份  月
    var _d = toTwo(d.getDate());        // 日
    var h = toTwo(d.getHours());        // 时
    var mi = toTwo(d.getMinutes());     // 分
    var s = toTwo(d.getSeconds());  // 秒
    var weekday = d.getDay();       // 星期几 0-6 0代表周日
    //var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return y + "-" + m + "-" + _d + " " + h + ":" + mi + ":" + s + " "; // + arr[weekday];
}
console.log(dateToString(date));