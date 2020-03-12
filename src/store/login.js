import axios from 'axios'


const state = {}
const getters = {}
const mutations = {}
const actions = {


    async login({ commit }, value) {

       

        try {
            var response = await axios
                .post(
                    "https://www.agropark.com.ng/api/v1/admin/login", value
                );



            return await response;


        } catch (error) {



            return await error.response;
        }





    },





}

export default {
    state,
    getters,
    mutations,
    actions,
}

