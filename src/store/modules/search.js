/* 
管理搜索模块相关数据的vuex模块
*/
import { reqProductList } from "@/api";
const state = {
  productList: {},
};
const mutations = {
  RECEIVE_PRODUCT_LIST(state, productList) {
    state.productList = productList;
  },
};
const actions = {
  async getProductList({ commit }, searchParams) {
    const result = await reqProductList(searchParams);
    if (result.code === 200) {
      const productList = data;
      commit("RECEIVE_PRODUCT_LIST", productList);
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};