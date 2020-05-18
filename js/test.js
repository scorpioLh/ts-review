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
