import axios from "axios";

const state = {

};
const getters = {

};
const mutations = {

};
const actions = {

    async fetch_registered_orders({ commit }, value) {
        try {
          var response = await axios.post(
            "https://www.agropark.com.ng/api/v1/section/sano_alpha_order_fetch",
            value
          );
            console.log(response)
          return await response;

        } catch (error) {
          console.log(error.response);
    
          return await error.response;
        }
    },
  
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
