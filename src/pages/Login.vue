<template>
  <q-page class="login_page">
    <div class="row">
      <div class="col-md-4 col-xs-12 offset-md-4   custom-text-center" >
        
        <q-card class="q-mt-lg q-ml-sm q-mr-sm shadow-9" >
    
          
          <q-separator />

          <q-card-section>
              <br>
             

                <q-item  class=" q-mb-sm q-mb-lg" >
                    <q-item-section avatar top>
                      <q-avatar icon="group" color="teal" text-color="white"  />
                    </q-item-section>

                    <q-item-section>
                       <q-item-label lines="1"> Admin Login Form</q-item-label>
                      <q-item-label caption>Fill the form to gain access to your dashboard</q-item-label>
                     
                    </q-item-section>

                    
                  </q-item>
              
              <div class="q-mr-lg q-ml-lg q-mt-md q-mb-xs">
                <q-input type="email" v-model="formData.email" label="Email Address" outlined />
              </div>

               <div class="q-mr-lg q-ml-lg q-mt-md q-mb-xs">
                <q-input type="password" v-model="formData.password" label="Password" outlined />
              </div>
          </q-card-section>



         

         
          <q-separator />

          <q-card-actions class="q-pt-lg q-pb-lg q-ml-md q-pl-lg q-pr-lg q-mr-md">
            <q-btn  label="Submit" color="teal-8" class="q-pt-xs q-pb-xs q-pl-lg q-pr-lg full-width" @click.prevent="submitForm('SUBMIT_LOGIN_FORM')" style="margin: auto" />
          </q-card-actions>



          

          
          


        </q-card>

     

      </div>
    </div
    
    
    >
  </q-page>
</template>



<script>

import {pick} from '../Repositories/pick'
import { notifier } from '../Repositories/notifier'
import { seo } from '../Repositories/seo'
import { loader } from '../Repositories/loader'
import { alert } from '../Repositories/alert'

export default {
  mixins: [ notifier, seo, loader, alert, pick,],
  data(){
    return {
      formData: {
          email: '',
          password: '',
      },
    }
  },

  methods: {
      api_params(value,step) {
        if(value == "SUBMIT_LOGIN_FORM"){
            return { ...this.formData, ...this.currentUrl(), ...this.platformDetector() }
        }
    },

    async api_calls(value) {

        let response;
        let x = this;




        if(value == "SUBMIT_LOGIN_FORM"){

            /** Start loader gif */
          this.showLoading();

          response = await this.$store.dispatch("login", this.api_params(value));

          console.log(response);



            /** If response contain status */
            if( response && 'status' in response){


              
              
              
                /** If response status is 200 */
                if(response.status == 200){

                  let api_payload = response.data.message.original;
                  let payload = response.data.message.original;
                  let admin_token = api_payload.admin_token;

                  
                  /** Checks if access token is valid */
                  if(x.isValidToken(admin_token) == true){


                    // /** Store credentials in cookies */
                     x.updateCredentials(api_payload);



                    /** Redirects to dashboard */
                    x.$router.push('/dashboard');
                    
                  
                  }


                  


                  

                }


                /** If response status is 400 or 404 */
                if(response.status == 400 || response.status == 404){
                  x.showNotif({type: 'warning', message: response.data.message });

                }

                /** If response contains error */
                if(response.data.errors){
                  x.showNotif({type: 'warning', message: response.data.errors });
                  
                }
                
              } 

              /** End loader gif */
              this.hideLoading();

        }
        

        
        



    },
    async submitForm(type) {
      //submitting formdata to api database


      if(type == "SUBMIT_LOGIN_FORM"){
        await this.api_calls(type);
      }

     
      
    }
  },
  
  
  created(){

      //updating seo title tag
      this.seoMetaTitle('Login');
         
  },

//   beforeRouteEnter (to, from, next) {

//     next(vm => {

//       /** Middleware A **/
//       if(vm.authMiddleware() == true){
//         vm.$router.push('/dashboard');

//       }
     
     
      
      
//     })
//   }
  

};
</script>

<style scoped>
.login_page {

  background: url('~assets/login_bg.jpeg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  

}

body:before {
  content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background: rgba(0,0,0,.1);
}
</style>
