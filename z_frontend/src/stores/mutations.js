export default {
    UI_open_toggle(state){
        state.UI.open = !state.UI.open;
    },
    //类型
    update_APP_shopType(state, data) {
        state.APP.shopType = data;
    },
    //商户
    update_APP_shop(state, data) {
      state.APP.shop = data;
    },
    //商品
    update_APP_food(state,data){
        state.APP.food=data;
    }

};
