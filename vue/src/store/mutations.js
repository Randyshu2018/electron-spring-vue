"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    /**
     * 更新用户数据
     * @param state
     * @param user
     */
    updateUserData: function (state, user) {
        state.userData = user;
    },
    /**
     * 更新初始化状态
     * @param state
     */
    ready: function (state) {
        state.ready = true;
    }
};
