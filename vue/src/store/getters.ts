
import state from "./state";

export default {
  /** 
   * 返回是否超级管理员
  */
  isSupperAdmin(state) {
    return state.userData.id === "0o0oo0o0-0o0o-0000-0000-0ooo000o0o0o"
  },
  isLogin(){
    return state.userData !== null&&state.userData !== undefined && state.userData !== '';
  },
  getUser(){
    console.log("getUser:"+state.userData);
    return state.userData;
  }
}
