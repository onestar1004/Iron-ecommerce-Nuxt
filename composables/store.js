import {defineStore} from 'pinia'

export const useStore = defineStore({
  id: 'store',
  state: () => {
    return {
      user: null,
      loaders: [],
      cartData: {cart: []},
    }
  },
  actions: {
    // User Actions
    setUser(user) {
      this.user = user;
    },

    // Cart Actions
    setCartData(cartData) {
      this.cartData = cartData;
    },

    // Loader Actions
    startLoad(loader) {
      if(!this.loaders.includes(loader)) {
        this.loaders.push(loader);
      }
    },
    isLoading(loader) {
      return this.loaders.includes(loader);
    },
    endLoad(loader) {
      this.loaders.splice(this.loaders.indexOf(loader), 1);
    },
  },
  getters: {
  }
})

export const refreshCart = async () => {
  let store = useStore();
  store.startLoad('cart');
  let cartData = await fetchPost('/api/get-cart');
  store.setCartData(cartData);
  store.endLoad('cart');
}

export const refreshUser = async () => {
  let store = useStore();
  store.startLoad('user');
  
  // Grab user data
  let fields = 'id,email,first_name,last_name,admin';
  let userData = await fetchPost('/api/get-user', {authToken: useCookie(useRuntimeConfig().public.auth_cookie).value, fields});
  store.setUser(userData);

  store.endLoad('user');

  return;
}

let saveUserTimeout = null;
export const saveUser = async (data) => {
  try {clearTimeout(saveUserTimeout)} catch(error) {}

  saveUserTimeout = setTimeout(() => {
    return new Promise(async resolve => {
      startLoad('savingUser');
      await fetchPost('/api/save-user', data);
      endLoad('savingUser');
      Toast('Saved');
      return resolve(true);
    })
  }, 800);
}

export const logout = () => {
  useStore().setUser(null);
  useCookie(useRuntimeConfig().public.auth_cookie).value = null;
  location.href = '/';
}

export const user = () => {
  return useStore().user;
}

export const isAdmin = () => {
  let isAdmin = false;
  if(user() && user().admin) {
    isAdmin = true;
  }
  return isAdmin;
}

export const startLoad = (loader) => {
  let store = useStore();
  store.startLoad(loader);
}

export const endLoad = (loader) => {
  let store = useStore();
  store.endLoad(loader);
}

export const isLoading = (loader) => {
  let store = useStore();
  return store.isLoading(loader);
}

export const is = (loader) => {
  return isLoading(loader);
}