
export default {

    /**
     * 设置用户
     * @param {any} commit
     * @param user
     */
  setUserData({commit},user){
      commit("updateUserData",user)
  },
  /**
   * 清除登录数据
   */
  clearUserLoginData({ commit }) {
    // 重置用户token
    commit('updateUserToken', "");
    // 更新用户菜单资源
    commit('updateUserMenuResource', []);
    // 重置用户控件资源
    commit('updateUserControlResource', []);
    // 重置用户数据
    commit('updateUserData', {})
    // 重置受托方列表
    commit('updateOutSourceList', [])
    // 重置委托方列表
    commit("updatePrincipalList", [])
    // 重置门店列表
    commit("updateStoreList", [])
    // 更新公司编号
    commit('updateCompanyCode', "");
    //重置token过期标识
    commit('updateTokenExpire', false);
  }
}
