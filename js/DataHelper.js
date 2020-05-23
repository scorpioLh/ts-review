"use strict";
// DataHelper类 - 负责 localStorage 操作
var DetaHelper = /** @class */ (function () {
    function DetaHelper(dataKey, primaryKey) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    DetaHelper.prototype.readData = function () {
        var strData = localStorage.getItem(this.dataKey);
        var arrData = [];
        if (strData) {
            arrData = JSON.parse(strData);
        }
        return strData;
    };
    DetaHelper.prototype.saveData = function (arrData) {
        var str = JSON.stringify(arrData);
        localStorage.setItem(this.dataKey, str);
    };
    DetaHelper.prototype.addData = function (conStr) {
        var arr = this.readData();
        var newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
        var obj = {
            content: conStr
        };
        obj[this.primaryKey] = newId;
        arr.push(obj);
        this.saveData(arr);
        return newId;
    };
    DetaHelper.prototype.removeDataById = function (id) {
        var _this = this;
        var arr = this.readData();
        var index = arr.findIndex(function (ele) {
            return ele[_this.primaryKey].toString() === id.toString();
        });
        if (index > -1) {
            arr.splice(index, 1);
            this.saveData(arr);
            return true;
        }
        return false;
    };
    return DetaHelper;
}());
