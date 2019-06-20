"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = require("./state");
exports.default = {
    /**
     * 返回是否超级管理员
    */
    isSupperAdmin: function (state) {
        return state.userData.id === "0o0oo0o0-0o0o-0000-0000-0ooo000o0o0o";
    },
    isLogin: function () {
        return state_1.default.userData !== null && state_1.default.userData !== undefined && state_1.default.userData !== '';
    },
    getUser: function () {
        console.log("getUser:" + state_1.default.userData);
        return state_1.default.userData;
    }
};
