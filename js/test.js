"use strict";
/**
 *
 * 基础类型
 *
 */
// 1、字符串类型
var dName = 'Ruiky';
// 2、数值类型
var dAge = 12;
// 3、bool类型
var isSingleDog = true;
// 4、undefined 和 null
var undef = undefined;
var nul = null;
// 5、数组
var arrHero = ['aaa', 'bbb', 'ccc'];
var arrHeroAge = [1, 2, 3];
var arrHeroAge2 = [11, 22, 33];
// 6、元组(tuple): 一个已知元素数量 和 每个元素类型的数组，内部的元素类型 不必相同
var tup1 = ['卧槽？', 22, true];
tup1 = ['???', 33, false];
// 7、枚举(enum): 用一组标识来代表数值，方便程序员调用理解
// 7.1 创建性别枚举
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
    Gender[Gender["Unknown"] = 3] = "Unknown";
})(Gender || (Gender = {}));
var Gender2;
(function (Gender2) {
    Gender2[Gender2["Boy"] = 0] = "Boy";
    Gender2[Gender2["Girl"] = 1] = "Girl";
    Gender2[Gender2["Unknown"] = 2] = "Unknown";
})(Gender2 || (Gender2 = {}));
console.log(Gender2.Boy); // 0
console.log(Gender2.Girl); // 1
console.log(Gender2.Unknown); // 2
// 7.2 使用性别枚举
var usrSex = Gender.Boy;
console.log(usrSex);
if (usrSex === Gender.Boy) {
    console.log('相等'); // 1
}
else {
    console.log(usrSex);
}
/**
 *
 * 函数
 *
 */
// 1、函数 返回值类型
function sayHi() {
    return 'hi~old driver~';
}
var res1 = sayHi();
// 2、函数 形参 类型
function jumpSan(cityName) {
    console.log('去哪里跳伞？');
    console.log("\u53BB" + cityName);
}
jumpSan('北京');
// 3、函数 可选参数？
function buyGun(gunName, count) {
    if (gunName === void 0) { gunName = 'aaaa'; }
    if (count === void 0) { count = 111; }
    console.log("\u7B2C\u4E00\u4E2A\u53C2\u6570" + gunName + "\u7B2C\u4E8C\u4E2A\u53C2\u6570" + count);
}
buyGun('ab');
// 4、前面不传参，后面传
buyGun(undefined, 333);
// 5、函数 生意参数
function add(x, y) {
    var restOfNum = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restOfNum[_i - 2] = arguments[_i];
    }
    // 求和
    var restNum = x + y;
    for (var _a = 0, restOfNum_1 = restOfNum; _a < restOfNum_1.length; _a++) {
        var ele = restOfNum_1[_a];
        restNum += ele;
    }
    console.log('结果：' + restNum);
}
add(1, 2, 3, 4, 5);
/**
 *
 * 类
 *
 */
var City = /** @class */ (function () {
    // 构造函数
    function City(name, level) {
        this.cName = name;
        this.cLevel = level;
    }
    City.prototype.about = function () {
        console.log("\u6B22\u8FCE\u6765\u5230" + this.cName + "\uFF0C\u5371\u9669\u7CFB\u6570" + this.cLevel);
    };
    return City;
}());
var c1 = new City('abc', 666);
c1.about();
