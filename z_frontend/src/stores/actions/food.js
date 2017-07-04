import QS from 'qs';    //queryString    自带转字符串
import { API } from '../API/API';


export default{
	getFood(store,{$http}){ 
	   // console.log(data) 
       $http.get(API.admin.goods.list).then((response)=>{
       	  store.commit('update_APP_food', response.data)
       })
	},
	/*addeatfood(store,{$http,data}){
		return $http({
			 method:'POST',
			 url:API.admin.food.add,
			 data:QS.stringify(data)
		})
	}*/
	addeatfood(store, {$http,data}){
			console.log(data)
			return $http({
				method:'POST',
				url:API.admin.goods.add,
				data:QS.stringify(data)
			});
	},
	deleteeatfood(store,{$http,data}){
		return $http({
			url:API.admin.goods.delete,
			params:data
		})
	},
	editGoods(store,{$http,data}){
		// console.log(data)
		return $http({
            method:'POST',
			url:API.admin.goods.edit,
			data:QS.stringify(data)
		})
	}


	// addeatfood(store,payload){
	// 	let config = {
 //             headers: {'content-type': 'application/x-www-form-urlencoded'}
 //         };
	// 	return payload.$http.post('http://localhost:8888/admin/goods/add',
	// 		'name='+payload.name+'&shop='+payload.shop,
	// 		config
	// 		)
	// }
}