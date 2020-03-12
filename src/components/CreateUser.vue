<template>
  <div>
          
          <transition-group
            appear
            enter-active-class="animated fadeInDown slower"
            leave-active-class="animated fadeOutUp slower"
          >
            <div
              class="createUserContainer  shadow-3"
             
              key="createUserContainer "
            >
              <div class="createUserItems">
                <q-item
                  clickable
                  v-ripple
                  style="background: rgba(128, 128, 128, 0.09) none repeat scroll 0% 0%"
                >
                  <q-item-section avatar>
                    <q-avatar
                      color="teal"
                      text-color="white"
                      icon="fas fa-user"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>
                   

                    </q-item-label>
                    <q-item-label caption>
                     <!-- --------------- -->
                     </q-item-label
                    >
                  </q-item-section>

                  <q-item-section side>
                    <div class="row items-center">
                      <q-btn
                        class="text-uppercase"
                        flat
                        style="border-radius: 30px; border: 1px solid #b9b1b1"
                        >CREATE USER</q-btn
                      >
                    </div>
                  </q-item-section>
                </q-item>
              </div>
              <div class="panelItems">
                <div class="customSubtitle text-subtitle">Basic Information</div>

                <div class="row">
                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                          <q-select outlined stack-label v-model="formData.title" dense :options="preloader.title" label="Title" />
                    
                    </div>
                  </div>


                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.surname"
                        label="Surname"
                        stack-label
                        dense
                        
                      />
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.other_names"
                        label="Other Names"
                        stack-label
                        dense
                      />
                    </div>
                  </div>




                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">

                         <q-input outlined v-model="date" mask="date" :rules="['date']" stack-label dense label="Date of birth">
                            <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                    <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
                                </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                     
                    </div>
                  </div>



                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.occupation"
                        label="Occupation"
                        stack-label
                        dense
                      />
                    </div>
                  </div>



                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.email"
                        label="Email Address"
                        stack-label
                        dense
                      />
                    </div>
                  </div>


                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.telephone"
                        label="Telephone"
                        stack-label
                        dense
                      />
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                         <q-select outlined stack-label v-model="formData.gender" dense :options="preloader.gender" label="Gender" />
                     
                    </div>
                  </div>

                  
                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                         <q-select outlined stack-label v-model="formData.religion" dense :options="preloader.religion" label="Religion" />
                    </div>
                  </div>


                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.home_address"
                        label="Home Address"
                        stack-label
                        dense
                      />
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.office_address"
                        label="Office Address"
                        stack-label
                        dense
                      />
                    </div>
                  </div>






                  
                </div>




                 <div class="customSubtitle text-subtitle" style="margin-top: 50px">Next Of Kin Details</div>


                 <div class="row">
                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.next_of_kin_name"
                        label="Kin Name"
                        stack-label
                        dense
                        
                      />
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.next_of_kin_email"
                        label="Kin Email"
                        stack-label
                        dense
                        
                      />
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.next_of_kin_tel"
                        label="Kin Phone"
                        stack-label
                        dense
                        
                      />
                    </div>
                  </div>
                 </div>





                 <div class="customSubtitle text-subtitle" style="margin-top: 50px">Financial Institution Details</div>


                 <div class="row">
                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                         <q-select outlined stack-label v-model="formData.bank_name" dense :options="preloader.financial_institutions" label="Bank Name" />
                    
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.acc_name"
                        label="Account Holders Name"
                        stack-label
                        dense
                        
                      />
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="formData.acc_no"
                        label="Account Number"
                        stack-label
                        dense
                        
                      />
                    </div>
                  </div>
                 </div>

               


               

                
              </div>
              <div class="panelItems q-pt-sm q-pb-sm">
                <q-btn
                  class="q-ml-md q-mr-sm text-white bg-red text-capitalize"
                  flat
                  label="Close"
                  @click.prevent="close()"
                />
                <q-btn
                  class="q-ma-sm text-white bg-teal text-capitalize"
                  flat
                  @click="api_calls('SUBMIT_CREATE_USER')"
                  label="Submit"
                />
              </div>
            </div>
          </transition-group>

          <!-- @@@ UserEdit Container Ends Here -->

  </div>
</template>

<script>

import { pick } from "../Repositories/pick";
import { notifier } from "../Repositories/notifier";
import { seo } from "../Repositories/seo";
import { loader } from "../Repositories/loader";
import { alert } from "../Repositories/alert";
import EventBus from "../eventbus/eventbus"
import { date } from 'quasar'


export default {
 mixins: [notifier, seo, loader, alert, pick],
 props: ['user','preloader'],
  data(){
      return {
        formData : {

        title: "",
        surname: "",
        other_names: "",
        username: "",

        date_of_birth: "",
        occupation: "",
        home_address: "",
        telephone: "",
        email: "",

        office_address: "",
        religion: "",
        next_of_kin_name: "",
        next_of_kin_email: "",
        next_of_kin_tel: "",

        bank_name: "",
        acc_name: "",
        acc_no: "",
        
        gender: "",

        
      },

      date: "2020-01-17",
          
    }
  },
  
  watch: {
    date: function (val) {
      this.formData.date_of_birth = date.formatDate(val, 'YYYY-MM-DD');
    },
  },

  methods: {
    api_params(value) {
      if (value == "SUBMIT_CREATE_USER") {
        return { token: this.$q.localStorage.getItem("admin_token"), ...this.formData };
      }
    },
    async api_calls(value){

        let response;
        let x = this;


        if (value == "SUBMIT_CREATE_USER") {
            
            /** Start loader gif */
            x.showLoading();

            response = await this.$store.dispatch(
            "registered_users_create",
            x.api_params(value)
            );


            /** If response contain status */
            if (response && "status" in response) {
            /** If response status is 200 */
            if (response.status == 200) {
                x.showNotif({ type: "success", message: response.data.message });

                /** Clears all input field */
                x.clearInputField(x.formData);

                /** Reset Action */
                x.close();
                x.refresh()
            }

            /** If response status is 400 or 404 */
            if (response.status.toString().includes(40) == true) {
                x.showNotif({ type: "warning", message: response.data.message });

                if (response.data.message.includes("Unauthenticated") == true) {
                x.removeCredentials();
                x.$router.push("/");
                }
            }

            /** If response contains error */
            if (response.data.errors) {
                x.showNotif({ type: "warning", message: response.data.errors });
            }
            }

            /** End loader gif */
            x.hideLoading();
        }
    },


    close(){
       this.$emit('close','users_list');
      
    },

    refresh(){
         this.$emit('refresh','')
    }

  },    
  
}
</script>


<style >
 
.createUserContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 7px;
  margin-right: 7px;
  margin-bottom: 30px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  overflow: hidden;
}

.createUserContainer > .panelItems:first-child {
  border-bottom: 1px solid #80808045;
}
.createContainer > .panelItems:last-child {
  border-top: 1px solid #80808045;
}


.customSubtitle{
  border-bottom: 1px dotted #c2c2c2;
  line-height: 1.8;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 16px;
  margin-top: 20px;
  color: teal;
  font-weight: 300px;
  font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}



</style>