import { defineStore } from 'pinia';
// import { getUsers } from '@/api/users';

export const useAppStore = defineStore('app', {
  state: () => ({
    requestObj: null, // 请求体缓存，防止请求重复提交
    token:
      '962d/52P9bc39fTndt2Hnsn4LOQ4Ew7SjWRoTwL9caR7qAr5e56vZ+el+kmYgOCnxZNdRVrOUATVVj/HqBEzK4anMzzsp5VzeTtdaaV95cRF7hh2T3fUP6K6tw',
    user: null,
    defaultAvatar: 'https://dummyimage.com/100x100/064b6e/fff.png',
  }),

  getters: {
    isUsered: (state) => !!(state.user && state.user.id),
  },

  actions: {
    // set fun
    setRequestObj(val) {
      this.requestObj = val || null;
    },
    setToken(val) {
      const tokenStr = val ? 'Bearer ' + val : '';
      this.token = tokenStr;
    },
    setUser(val) {
      this.user = val || null;
    },

    // actions fun
    signOut() {
      this.token = '';
      this.user = null;
      reloadNuxtApp();
    },

    // async getUserInfo() {
    //   const res = await getUsers();
    //   this.setUser(res.data);
    //   return res.data;
    // },
  },

  // 持久化
  persist: {
    key: 'app-cache',
    pick: ['token'],
  },
});
