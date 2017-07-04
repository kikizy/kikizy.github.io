const H='http://localhost:8080/';

export const HOST=H;

export const API={
	admin:{
	  shopType:{
		list:H +'admin/shoptype',
		add: H + 'admin/shoptype/add',
		edit: H + 'admin/shoptype/edit',
		delete: H + 'admin/shoptype/delete'
	  },
	  shop:{
		list: H + 'admin/shop',
		add: H + 'admin/shop/add',
		delete:H+'admin/shop/delete',
		edit: H + 'admin/shop/edit',
		uploadCover: H + 'admin/shop/cover'
	  },
	  goods:{
		list: H + 'admin/goods',
		add: H + 'admin/goods/add',
		delete:H+'admin/goods/delete',
		edit:H+'admin/goods/edit'
	  }
	}
}
