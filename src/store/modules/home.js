/* 
用来管理首页数据的vuex模块
*/
import { reqBaseCategoryList, reqBanners, reqFloors } from "@/api";

export default {
  state: {
    baseCategoryList: [], // 所有分类的数组
    banners: [], // 轮播的数组
    floors: [], // 楼层的数组
  },

  mutations: {
    /* 
    接收保存新的分类列表
    */
    RECEIVE_BASE_CATEGORY_LIST(state, baseCategoryList) {
      state.baseCategoryList = baseCategoryList;
    },

    /* 
    接收保存新的轮播数组
    */
    RECEIVE_BANNERS(state, banners) {
      state.banners = banners;
    },

    /* 
    接收保存新的楼层数组
    */
    RECEIVE_FLOORS(state, floors) {
      state.floors = floors;
    },
  },

  actions: {
    /* 
    获取分类列表的异步action
    */
    async getBaseCategoryList({ commit }) {
      const result = await reqBaseCategoryList();
      if (result.code === 200) {
        const baseCategoryList = result.data;
        commit("RECEIVE_BASE_CATEGORY_LIST", baseCategoryList);
      }
    },

    /* 
    获取轮播列表的异步action
    */
    async getBanners({ commit }) {
      const result = await reqBanners();
      if (result.code === 200) {
        const banners = result.data;
        commit("RECEIVE_BANNERS", banners);
      }
    },

    /* 
    获取楼层列表的异步action
    */
    async getFloors({ commit }) {
      const result = await reqFloors();
      if (result.code === 200) {
        const floors = result.data;
        commit("RECEIVE_FLOORS", floors);
      }
    },
  },
  getters: {},
};
