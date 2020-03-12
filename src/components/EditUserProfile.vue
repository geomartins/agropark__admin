<template>
  <div style="position: relative">
           <!-- UserEdit Container Starts Here -->
          <transition-group
            appear
            enter-active-class="animated fadeInDown slower"
            leave-active-class="animated fadeOutUp slower"
          >

          
            <div
              class="userEditContainer shadow-1 "
             
              key="userEditContainer "
            >
            <div class="bannerX">
              <div class="bannerY"></div>
              <div class="bannerZ">
                 <div >
                   <!-- https://agropark.com.ng/storage/passports/2.png -->
                   <!-- https://www.w3schools.com/css/img_avatar.png -->
                    <img class="profile" :src='this.displayUserProfileImage(userEditFormData.passport_photograph)' >

                    <span class="profile_description">
                      <div style="font-size: 20px; "> {{ userEditFormData.title }} {{ userEditFormData.surname+' '+ userEditFormData.other_names | ucwords }}</div>
                      <div style="line-height: 2.0"> 
                        <span style="margin-right: 10px;"><q-icon name='phone' color="teal" /> {{ userEditFormData.telephone }} </span> 
                         <span style="margin-right: 10px;"><q-icon name='android' color="teal" /> {{ userEditFormData.email }} </span>
                         
                        </div>
                      <div style="margin-top: 25px">  <q-btn
                  class=" q-mr-sm text-white bg-red text-capitalize"
                  flat
                  label="Back"
                  @click.prevent="close()"
                />
                <q-btn
                  class=" text-white bg-teal text-capitalize"
                  flat
                  @click="api_calls('SUBMIT_USER_EDIT')"
                  label="Update Changes"
                /></div>
                    </span>
                  </div>


                  <div style="float: right">
                    
                  </div>
              </div>

          </div>

           
              <!-- <div class="userEditItems">
                <q-item
                  clickable
                  v-ripple
                  style="background: rgba(128, 128, 128, 0.09) none repeat scroll 0% 0%"
                >
                  <q-item-section avatar>
                    <q-avatar
                      color="teal"
                      text-color="white"
                      icon="fas fa-edit"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>
                      {{ userEditFormData.fullname | ucwords }}
                    </q-item-label>
                    <q-item-label caption>
                      {{ userEditFormData.email }}</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side>
                    <div class="row items-center">
                      <q-btn
                        class="text-uppercase"
                        flat
                        style="border-radius: 30px; border: 1px solid #b9b1b1"
                        >PROFILE EDIT</q-btn
                      >
                    </div>
                  </q-item-section>
                </q-item>
              </div> -->
              <div class="panelItems">
                <div class="customSubtitle text-subtitle">Basic Information</div>

                <div class="row">
                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                          <q-select outlined stack-label v-model="userEditFormData.title" dense :options="preloader.title" label="Title" />
                    
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="userEditFormData.username"
                        label="Username"
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
                        v-model="userEditFormData.surname"
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
                        v-model="userEditFormData.other_names"
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
                      <!-- <q-input
                        type="text"
                        outlined
                        v-model="userEditFormData.date_of_birth"
                        label="Date Of Birth"
                        stack-label
                        dense
                      /> -->
                    </div>
                  </div>



                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="userEditFormData.occupation"
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
                        v-model="userEditFormData.email"
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
                        v-model="userEditFormData.telephone"
                        label="Telephone"
                        stack-label
                        dense
                      />
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                         <q-select outlined stack-label v-model="userEditFormData.gender" dense :options="preloader.gender" label="Gender" />
                     
                    </div>
                  </div>

                  
                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                         <q-select outlined stack-label v-model="userEditFormData.religion" dense :options="preloader.religion" label="Religion" />
                    </div>
                  </div>


                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                    <div class="q-mt-sm q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="userEditFormData.home_address"
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
                        v-model="userEditFormData.office_address"
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
                        v-model="userEditFormData.next_of_kin_name"
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
                        v-model="userEditFormData.next_of_kin_email"
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
                        v-model="userEditFormData.next_of_kin_tel"
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
                         <q-select outlined stack-label v-model="userEditFormData.bank_name" dense :options="preloader.financial_institutions" label="Bank Name" />
                    
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="userEditFormData.acc_name"
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
                        v-model="userEditFormData.acc_no"
                        label="Account Number"
                        stack-label
                        dense
                        
                      />
                    </div>
                  </div>
                 </div>







                 <div class="customSubtitle text-subtitle" style="margin-top: 50px">Other Information</div>


                 <div class="row">
                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                         <q-select outlined stack-label v-model="userEditFormData.personal_detail_status" dense :options="preloader.boolean" label="Registration Completed" />
                    
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="userEditFormData.created_at"
                        label="Created At"
                        disable
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
                        v-model="userEditFormData.id"
                        label="User ID"
                        disable
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
                        v-model="userEditFormData.referral"
                        label="Referral"
                        disable
                        stack-label
                        dense
                        
                      />
                    </div>
                  </div>
                 </div>


              
                 <div class="customSubtitle text-subtitle" style="margin-top: 50px">Upload Passport</div>

                 <template>
                  <div class="q-pa-md" style="max-width: 300px">
                                  <q-uploader
                    :factory="uploadFactory"
                    label="Upload Image/File"
                    color="primary"
                    ref="uploader"
                    
                    auto-expand
                  
                  />
                  </div>
                </template>


              
               


               

                
              </div>
              <div class="panelItems q-pt-sm q-pb-sm">
                <q-btn
                  class="q-ml-md q-mr-sm text-white bg-red text-capitalize"
                  flat
                  label="Back"
                  @click.prevent="close()"
                />
                <q-btn
                  class="q-ma-sm text-white bg-teal text-capitalize"
                  flat
                  @click="api_calls('SUBMIT_USER_EDIT')"
                  label="Update Changes"
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
import axios from 'axios'



export default {
 mixins: [notifier, seo, loader, alert, pick],
 props: ['user','preloader'],
  data(){
      return {
        userEditFormData : {
        id: this.user.id,
        title: this.user.title,
        surname: this.user.surname,
        other_names: this.user.other_names,
        username: this.user.username,

        date_of_birth: this.user.date_of_birth,
        occupation: this.user.occupation,
        home_address: this.user.home_address,
        telephone: this.user.telephone,
        email: this.user.email,

        office_address: this.user.office_address,
        religion: this.user.religion,
        next_of_kin_name: this.user.next_of_kin_name,
        next_of_kin_email: this.user.next_of_kin_email,
        next_of_kin_tel: this.user.next_of_kin_tel,

        bank_name: this.user.bank_name,
        acc_name: this.user.acc_name,
        acc_no: this.user.acc_no,
        confirmed: this.user.confirmed,
        personal_detail_status: this.user.personal_detail_status,
        gender: this.user.gender,
        passport_photograph: this.user.passport_photograph,

        fullname: this.user.surname + " " + this.user.other_names,
        created_at: this.user.created_at,
        updated_at: this.user.updated_at,
      },

      date: this.user.date_of_birth,
      uploadPercentage: 0
          
    }
  },
  
  watch: {
    date: function (val) {
      this.userEditFormData.date_of_birth = date.formatDate(val, 'YYYY-MM-DD');
    },
  },

  methods: {
    
     uploadFactory (file) {
      let data = new FormData();

      data.append('file', file[0])
      // console.log(file)
      data.append('token',this.$q.localStorage.getItem("admin_token"))
      data.append('user_id', this.userEditFormData.id)

      return new Promise((resolve, reject) => {
        this.$axios.post(
          'https://www.agropark.com.ng/api/v1/admin/registered_users_passport_upload',
           data, 
           { headers: { 
             'Content-Type': 'multipart/form-data'
          } }
        ).then(response => {
          console.log(response)
          resolve(null)
        }).catch(error => {
          if (error) {
            console.log(error)
            resolve(null)
          }
        })
      })
    },
    api_params(value) {
      if (value == "SUBMIT_USER_EDIT") {
        return { token: this.$q.localStorage.getItem("admin_token"), ...this.userEditFormData };
      }
    },
    async api_calls(value){

        let response;
        let x = this;


        if (value == "SUBMIT_USER_EDIT") {
            /** Start loader gif */
            x.showLoading();

            response = await this.$store.dispatch(
            "registered_users_edit_confirm",
            x.api_params(value)
            );

            


            /** If response contain status */
            if (response && "status" in response) {
            /** If response status is 200 */
            if (response.status == 200) {
                x.showNotif({ type: "success", message: response.data.message });

                /** Clears all input field */
                x.clearInputField(x.userEditFormData);

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
 
.userEditContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 7px;
  margin-right: 7px;
  margin-bottom: 30px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  overflow: hidden;
  
}

.bannerX{
  
  background: white;
  width: 100%;
  height: 350px;
  display: inline-block;
  
}

.bannerY{
  
  background: teal;
  width: 100%;
  height: 60%;
  
}

.bannerZ{
   position: relative;
  width: 100%;
  height: 50%;
  
}

.profile{
  position: absolute;
  width: 200px;
  
 
  background: #eee;
  
  height: 200px;
  top: -50%;
  left: 4%;
  border-radius: 50%;
  /* box-shadow: 2px 2px 2px gray; */

}

.profile_description{
  position: absolute;
  top: 10%;
  left: 20%;
}


@media screen and (max-width: 1200px) {
  .profile_description{
    display: none;
  }
}


@media screen and (min-width: 1201px) and (max-width: 1500px) {
  .profile_description{
     position: absolute;
      top: 10%;
      left: 30%;
      display: inline-block;
  }
}


/* @media screen and (min-width: 1201px) and (max-width: 2000px) {
  .profile_description{
     position: absolute;
      top: 10%;
      left: 20%;
      display: inline-block;
  }
} */


.userEditContainer > .panelItems:first-child {
  border-bottom: 1px solid #80808045;
}
.userEditContainer > .panelItems:last-child {
  border-top: 1px solid #80808045;
  background: #eee;
  margin-top: 40px;
}


.customSubtitle{
  border-bottom: 1px dotted #c2c2c2;
  line-height: 1.8;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 17px;
  margin-top: 20px;
  color: teal;
  font-weight: 300px;
  font-family:  'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
}



</style>