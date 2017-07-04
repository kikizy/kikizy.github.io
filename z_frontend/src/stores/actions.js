//导入
import ShopTypeActions from './actions/shopType';
import ShopActions from './actions/shop';
import FoodActions from './actions/food';

export default {
     ...ShopTypeActions,
     ...ShopActions,
     ...FoodActions
};
