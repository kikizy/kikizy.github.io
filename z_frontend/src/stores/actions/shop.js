import QS from 'qs';    //queryString    自带转字符串
import { API } from '../API/API';

export default{
	 	 // 获取所有的shangp类型信息  --foodshop
		getShop(store, {$http}) {
			$http.get(API.admin.shop.list).then((response) => {
				store.commit('update_APP_shop', response.data);
		});
		},


		addshop(store, {$http,data}){
			console.log(data)
			return $http({
				method:'POST',
				url:API.admin.shop.add,
				data:QS.stringify(data)
			});
		},
		deleteShop(store,{$http,data}){
			// console.log(data)
			return $http({
				url:API.admin.shop.delete,
				params:data
			})
		},
		editShop(store,{$http,data}){
	        console.log(data)
	        return $http({
	            method:'POST',
	            url:API.admin.shop.edit,
	            data:QS.stringify(data)
	        })
	     }

		// addfood(store, payload) {    //--foodshop
		//     let config = {
		//         headers: {'content-type': 'application/x-www-form-urlencoded'}
		//     };
		//     return new Promise(function(resolve, reject) {
		//         payload.$http.post('http://localhost:8888/admin/shop/add', 'name='+payload.data.name +'&type='+payload.data.type, config ).then( (response) => {
		//             // console.log(response);
		//             if (response.data.code) {
		//                 reject(response.data);
		//             } else {
		//                 resolve(response.data);
		//             }
		//         } );
		//     })
		// }
}
