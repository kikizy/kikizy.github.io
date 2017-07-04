/**
 * Created by Ying on 2017/6/28.
 */
import qs from 'qs'
import revamp from './userevamp/revamp';

export default {
  //注册
  register(store,{$http,data}){
      return $http({
         method:'POST',
         url:'http://localhost:8080/api/user/reg',
         data:qs.stringify(data)
      })
  },
  //登入
  loginUser(store,{$http,data}){
       return $http({
          method:'POST',
          url:'http://localhost:8080/api/user/login',
          data:qs.stringify(data)
       })
  },
  logout(store,{$http,data}){
    return $http({
      method:'GET',
      url:'http://localhost:8080/api/user/logout',

    })
  }
}
