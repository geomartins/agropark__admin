import axios from "axios";

const state = {};
const getters = {};
const mutations = {};
const actions = {
  async fetch_registered_users_preloader({ commit }, value) {
    try {

      var response = await axios.post(
        "https://www.agropark.com.ng/api/v1/admin/registered_users_preloader",
        value
      );

      return await response;
    } catch (error) {
    
      return await error.response;
    }
  },

  async fetch_registered_users({ commit }, value) {
    try {
      var response = await axios.post(
        "https://www.agropark.com.ng/api/v1/admin/registered_users",
        value
      );

      return await response;
    } catch (error) {
      console.log(error.response);

      return await error.response;
    }
  },

  async search_registered_users({ commit }, value) {
    try {
      var response = await axios.post(
        "https://www.agropark.com.ng/api/v1/admin/registered_users_search",
        value
      );

      return await response;
    } catch (error) {
      console.log(error.response);

      return await error.response;
    }
  },

  async registered_users_change_password({ commit }, value) {
    try {
      var response = await axios.post(
        "https://www.agropark.com.ng/api/v1/admin/registered_users_change_password",
        value
      );

      return await response;
    } catch (error) {
      return await error.response;
    }
  },

  async registered_users_edit_confirm({ commit }, value) {
    try {
      var response = await axios.post(
        "https://www.agropark.com.ng/api/v1/admin/registered_users_edit_confirm",
        value
      );

      return await response;
    } catch (error) {
      return await error.response;
    }
  },

  async registered_users_create({ commit }, value) {
    try {
      var response = await axios.post(
        "https://www.agropark.com.ng/api/v1/admin/registered_users_create",
        value
      );

      return await response;
    } catch (error) {
      return await error.response;
    }
  },

  async registered_users_filter({ commit }, value) {
    try {
      var response = await axios.post(
        "https://www.agropark.com.ng/api/v1/admin/registered_users_filter",
        value
      );

      return await response;
    } catch (error) {
      return await error.response;
    }
  },

  async remove_registered_users({ commit }, value) {
    try {
      var response = await axios.post(
        "https://www.agropark.com.ng/api/v1/admin/registered_users_remove",
        value
      );

      return await response;
    } catch (error) {
      return await error.response;
    }
  },


  async registered_users_report({ commit }, value) {
    try {
      var response = await axios.post(
        "https://www.agropark.com.ng/api/v1/admin/registered_users_report",
        value
      );

      return await response;
    } catch (error) {
      return await error.response;
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
