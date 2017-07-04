import QS from 'qs';    //queryString
import { API } from '../API/API';

export default{
	  // 获取所有的商家类型信息   --ShopType
    // getShopTypes(store, payload ) {
    //     // console.log(arguments);
    //     payload.$http.get('http://localhost:8888/admin/shoptype').then((response) => {
    //         // console.log(response);
    //         store.commit('update_APP_shopType', response.data);
    //     });
    // },
     // getShopTypes(store, {$http} ) {
     //    $http({
     //    	url:API.admin.shopType.list
     //    }).then((response) => {
     //    	// ???
     //        response.data.forEach(function(item){
     //            item.allowSelected=true;
     //        })
     //        store.commit('update_APP_shopType', response.data);
     //    });
     // },
     getShopTypes(store, {$http}) {
            $http.get(API.admin.shopType.list).then((response) => {
                store.commit('update_APP_shopType', response.data);
        });
        },
    // 提交/添加 新的商家类型
    addShopType(store,{$http,data}){
        return $http({
            method:'POST',
            url:API.admin.shopType.add,
            data:QS.stringify(data)
        });
    },
 //    addShopType(store, payload) {    //--ShopType
 //        let config = {
 //            headers: {'content-type': 'application/x-www-form-urlencoded'}
 //        };
 //        return new Promise(function(resolve, reject) {
 //            payload.$http.post('http://localhost:8888/admin/shoptype/add', 'name='+payload.data.name, config ).then((response) => {
 //                // console.log(response);
 //                if (response.data.code) {
 //                    reject(response.data);
 //                } else {
 //                    resolve(response.data);
 //                }
 //            } );
 //        })
 //    },
 //    删除
     deleteShopType(store,{$http,data}){
        return $http({
            url:API.admin.shopType.delete,
            params:data
        })
     },

     editShopType(store,{$http,data}){
        console.log(data)
        return $http({
            method:'POST',
            url:API.admin.shopType.edit,
            data:QS.stringify(data)
        })
     }

	// deleteShopType(store,payload){   //  --shopType
	// return payload.$http.post('http://localhost:8888/admin/shoptype/delete?id='+payload.id)
	// }
}
