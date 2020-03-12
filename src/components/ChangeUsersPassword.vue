<template>
  <div>
          <transition-group
            appear
            enter-active-class="animated fadeInDown slower"
            leave-active-class="animated fadeOutUp slower"
          >
            <div
              class="changePasswordContainer shadow-3"
              key="changePasswordContainer"
            >
              <div class="changePasswordItems">
                <q-item
                  clickable
                  v-ripple
                  style="background: rgba(128, 128, 128, 0.09) none repeat scroll 0% 0%"
                >
                  <q-item-section avatar>
                    <q-avatar
                      color="teal"
                      text-color="white"
                      icon="fas fa-key"
                    />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>
                      {{ this.changePasswordFormData.fullname | ucwords }}
                    </q-item-label>
                    <q-item-label caption>
                      {{ this.changePasswordFormData.email }}</q-item-label
                    >
                  </q-item-section>

                  <q-item-section side>
                    <div class="row items-center">
                      <q-btn
                        class="text-uppercase"
                        flat
                        style="border-radius: 30px; border: 1px solid #b9b1b1"
                        >CHANGE PASSWORD</q-btn
                      >
                    </div>
                  </q-item-section>
                </q-item>
              </div>
              <div class="panelItems">
                <div class="q-ma-md">
                  <q-input
                    type="password"
                    outlined
                    v-model="changePasswordFormData.password"
                    label="New Password"
                    stack-label
                    dense
                  />
                </div>

                <div class="q-ma-md">
                  <q-input
                    type="password"
                    outlined
                    v-model="changePasswordFormData.password_confirmation"
                    label="Confirm Password"
                    stack-label
                    dense
                  />
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
                  @click="api_calls('SUBMIT_CHANGE_PASSWORD')"
                  label="Update Changes"
                />
              </div>
            </div>
          </transition-group>
  </div>
</template>

<script>

import { pick } from "../Repositories/pick";
import { notifier } from "../Repositories/notifier";
import { seo } from "../Repositories/seo";
import { loader } from "../Repositories/loader";
import { alert } from "../Repositories/alert";
import EventBus from "../eventbus/eventbus"


export default {
 mixins: [notifier, seo, loader, alert, pick],
 props: ['user'],
  data(){
      return {
          changePasswordFormData: {
            email: this.user.email,
            password: "",
            password_confirmation: "",
            user_id: this.user.id,
            fullname: this.user.surname + " " + this.user.other_names,
            personal_detail_status: this.user.personal_detail_status
          },
      }
  },
  methods: {
    api_params(value) {
      if (value == "SUBMIT_CHANGE_PASSWORD") {
        return { token: this.$q.localStorage.getItem("admin_token"), ...this.changePasswordFormData };
      }
    },
    async api_calls(value){

        let response;
        let x = this;


        if (value == "SUBMIT_CHANGE_PASSWORD") {
            /** Start inner loading */
            x.innerLoading(true);

            response = await this.$store.dispatch(
            "registered_users_change_password",
            x.api_params(value)
            );



            /** If response contain status */
            if (response && "status" in response) {
            /** If response status is 200 */
            if (response.status == 200) {
                x.showNotif({ type: "success", message: response.data.message });

                /** Clears all input field */
                x.clearInputField(x.changePasswordFormData);

                /** Reset Action */
                x.close();
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

            /** End inner loading */
            x.innerLoading(false);
        }
    },


    close(){
       this.$emit('close','users_list');
    },

  },    
  
}
</script>


<style >
 /* @@@@@@@@@@@@@@@ change password style starts here */
.changePasswordContainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 7px;
  margin-right: 7px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  overflow: hidden;
}
.changePasswordContainer > .panelItems:first-child {
  border-bottom: 1px solid #80808045;
}
.changePasswordContainer > .panelItems:last-child {
  border-top: 1px solid #80808045;
}
/* @@@ change password style ends here */


</style>