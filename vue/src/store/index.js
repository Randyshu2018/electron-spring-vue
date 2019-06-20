"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var vuex_1 = require("vuex");
var state_1 = require("./state");
var mutations_1 = require("./mutations");
var actions_1 = require("./actions");
var getters_1 = require("./getters");
// import createPersistedState from 'vuex-persistedstate'
// 引入模块
// import workspace from './modules/workspace.store'
// import message from './modules/message.store'
// import inrushCase from './modules/inrush-case.store'
// import taticManage from './modules/tatic-manage.store'
// import accManage from './modules/acc-manage.store'
// import outSourceManage from './modules/outsource-manage.store'
// import caseManage from './modules/case-manage.store'
// import systemManage from './modules/system-manage.store'
// import letterAcc from './modules/letter-acc.store'
// import specialManage from './modules/special-manage.store'
// import stopCase from './modules/stop-case.store'
vue_1.default.use(vuex_1.default);
// const filterList = ['ready', "layout"]
var store = new vuex_1.default.Store({
    // 子模块
    // modules: {
    //   "workspace": workspace,
    //   "message": message,
    //   "inrush-case": inrushCase,
    //   "tatic-manage": taticManage,
    //   "acc-manage": accManage,
    //   "outsource-manage": outSourceManage,
    //   "case-manage": caseManage,
    //   "letter-acc": letterAcc,
    //   "system-manage": systemManage,
    //   "special-manage": specialManage,
    //   "stop-case": stopCase,
    //
    //
    //
    // },
    state: state_1.default,
    getters: getters_1.default,
    mutations: mutations_1.default,
    actions: actions_1.default,
});
exports.default = store;
