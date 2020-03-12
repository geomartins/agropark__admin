import axios from 'axios'

const state = {}
const getters = {   }
const mutations = {  }
const actions = {

    async password_reset({commit},value){

            try {
                var response = await axios
                .post(
                    "https://www.agropark.com.ng/api/v1/admin/password_reset",value
                );

                return await response;
    
            }catch(error){
                 
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

