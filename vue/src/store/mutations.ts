
export default {

  /**
   * 更新用户数据
   * @param state
   * @param user
   */
  updateUserData(state, user) {
    state.userData = user
  },
  /**
   * 更新初始化状态
   * @param state
   */
  ready(state) {
    state.ready = true
  }
}
