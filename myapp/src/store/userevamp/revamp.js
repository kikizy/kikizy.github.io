/**
 * Created by Ying on 2017/6/29.
 */

export default {
  upreport(store,{$http,data}){
      return $http({
         method:'POST',
         url:'http://localhost:8888/api/user/profile/edit',
         data:qs.stringify(data)
      })
  }
}
