<template>
  <q-page class="dashboard">
    <q-pull-to-refresh @refresh="refresh">
      <div class="row">
        <div class="col-md-8 col-sm-12 col-xs-12 offset-md-2">
          <app-connection></app-connection>





           <!-- UserEdit Container Starts Here -->
          <transition-group
            appear
            enter-active-class="animated fadeInDown slower"
            leave-active-class="animated fadeOutUp slower"
          >
            <div
              class="userEditContainer "
              v-if="this.action == 'user_edit'"
              key="userEditContainer "
            >
              <div class="userEditItems">
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
              </div>
              <div class="panelItems">
                <div class="customSubtitle text-subtitle">Basic Information</div>

                <div class="row">
                  <div class="col-md-6 col-xs-12 col-sm-12 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                      <q-input
                        type="text"
                        outlined
                        v-model="userEditFormData.title"
                        label="Title"
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
                      <q-input
                        type="text"
                        outlined
                        v-model="userEditFormData.date_of_birth"
                        label="Date Of Birth"
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
                      <q-input
                        type="text"
                        outlined
                        v-model="userEditFormData.gender"
                        label="Gender"
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
                        v-model="userEditFormData.religion"
                        label="Religion"
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
                      <q-input
                        type="text"
                        outlined
                        v-model="userEditFormData.bank_name"
                        label="Bank Name"
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
                      <q-input
                        type="text"
                        outlined
                        v-model="userEditFormData.personal_detail_status"
                        label="Registration Completed"
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
               


               

                
              </div>
              <div class="panelItems q-pt-sm q-pb-sm">
                <q-btn
                  class="q-ml-md q-mr-sm text-white bg-red text-capitalize"
                  flat
                  label="Close"
                  @click.prevent="removeAction()"
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




          <!-- ChangePassword Container Starts Here -->
          <transition-group
            appear
            enter-active-class="animated fadeInDown slower"
            leave-active-class="animated fadeOutUp slower"
          >
            <div
              class="changePasswordContainer "
              v-if="this.action == 'change_password'"
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
                      {{ changePasswordFormData.fullname | ucwords }}
                    </q-item-label>
                    <q-item-label caption>
                      {{ changePasswordFormData.email }}</q-item-label
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
                  @click.prevent="removeAction()"
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

          <!-- @@@ ChangePassword Container Ends Here -->

          <!-- UsersList Container Starts Here -->

          <transition-group
            appear
            enter-active-class="animated fadeIn slower"
            leave-active-class="animated fadeOut slower"
          >
            <div v-if="this.action == 'users_list'" key="buttonBarContainer">
              <div class="q-mt-md buttonBarContainer">
                <div class="items search">
                  <q-input
                    class="q-mt-sm q-ml-sm"
                    v-model="search"
                    dense
                    rounded
                    outlined
                  >
                    <template v-slot:append>
                      <q-avatar>
                        <q-icon
                          color="teal"
                          size="xs"
                          name="fas fa-search"
                        ></q-icon>
                      </q-avatar>
                    </template>
                  </q-input>
                </div>

                <div class="items">
                  <q-btn class="q-ma-sm text-green" label="CREATE" />
                </div>

                <div class="items">
                  <q-btn class="q-ma-sm text-green" label="FILTER" />
                </div>
              </div>

              <div
                v-if="paginatedList.length < 1"
                class="q-mt-md q-ml-sm q-mr-sm q-mb-md"
              >
                <q-card>
                  <q-item>
                    <q-item-section avatar>
                      <q-skeleton type="QAvatar" />
                    </q-item-section>

                    <q-item-section>
                      <q-item-label>
                        <q-skeleton type="text" />
                      </q-item-label>
                      <q-item-label caption>
                        <q-skeleton type="text" />
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-skeleton height="200px" square />

                  <q-card-actions align="right" class="q-gutter-md">
                    <q-skeleton type="QBtn" />
                    <q-skeleton type="QBtn" />
                  </q-card-actions>
                </q-card>
              </div>

              <div class="q-mt-md">
                <div class="q-ml-sm q-mb-sm" v-if="search != ''">
                  <q-icon
                    name="fas fa-arrow-right"
                    color="teal"
                    class="q-mr-xs"
                  ></q-icon>
                  {{ usersList.length }}
                  {{ usersList.length > 1 ? "results found" : "result found" }}
                </div>
                <q-list
                  bordered
                  class="rounded-borders q-mt-xs q-mr-sm q-ml-sm"
                  style="border-radius: 10px"
                >
                  <q-expansion-item
                    :default-opened="false"
                    v-for="user in paginatedList"
                    :key="user.id"
                    style="border-bottom: 1px solid rgba(0, 0, 0, 0.12)"
                  >
                    <template v-slot:header>
                      <q-item-section avatar>
                        <div>
                          <q-avatar
                            :icon="
                              user.gender == 'male'
                                ? 'fas fa-male'
                                : 'fas fa-female'
                            "
                            :color="
                              user.personal_detail_status == 'true'
                                ? 'teal'
                                : 'pink'
                            "
                            text-color="white"
                          />
                        </div>
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>
                          {{ user.title | ucwords }}
                          {{
                            (user.surname + " " + user.other_names) | ucwords
                          }}
                        </q-item-label>
                        <q-item-label caption>{{ user.email }}</q-item-label>
                      </q-item-section>

                      <q-item-section side>
                        <div class="row items-center">
                          {{ user.created_at | dateToHumanReadableForm }}
                        </div>
                      </q-item-section>
                    </template>

                    <q-card>
                      <q-card-section>
                        <div class="row">
                          <div class="col-md-6 col-xs-12">
                            <q-list bordered class="q-mr-sm q-mb-sm q-ml-sm">
                              <q-item>
                                <q-item-section>
                                  <q-item-label caption lines="2"
                                    >Fullname</q-item-label
                                  >
                                  <q-item-label>
                                    {{
                                      (user.surname + " " + user.other_names)
                                        | ucwords
                                    }}
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </div>

                          <div class="col-md-6 col-xs-12">
                            <q-list bordered class="q-mr-sm q-mb-sm q-ml-sm">
                              <q-item>
                                <q-item-section>
                                  <q-item-label caption lines="2"
                                    >Email</q-item-label
                                  >
                                  <q-item-label>
                                    {{ user.email }}
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </div>

                          <div class="col-md-4 col-xs-12">
                            <q-list bordered class="q-mr-sm q-mb-sm q-ml-sm">
                              <q-item>
                                <q-item-section>
                                  <q-item-label caption lines="2"
                                    >Telephone</q-item-label
                                  >
                                  <q-item-label>
                                    {{ user.telephone }}
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </div>

                          <div class="col-md-4 col-xs-12">
                            <q-list bordered class="q-mr-sm q-mb-sm q-ml-sm">
                              <q-item>
                                <q-item-section>
                                  <q-item-label caption lines="2"
                                    >Date of Birth</q-item-label
                                  >
                                  <q-item-label>
                                    {{
                                      user.date_of_birth
                                        | dateToHumanReadableForm
                                    }}
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </div>

                          <div class="col-md-4 col-xs-12">
                            <q-list bordered class="q-mr-sm q-mb-sm q-ml-sm">
                              <q-item>
                                <q-item-section>
                                  <q-item-label caption lines="2"
                                    >Created At</q-item-label
                                  >
                                  <q-item-label>
                                    {{
                                      user.created_at | dateToHumanReadableForm
                                    }}
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </div>

                          <div class="col-md-4 col-xs-12">
                            <q-list bordered class="q-mr-sm q-mb-sm q-ml-sm">
                              <q-item>
                                <q-item-section>
                                  <q-item-label caption lines="2"
                                    >Portfolio</q-item-label
                                  >
                                  <q-item-label>
                                    <q-icon
                                      color="teal"
                                      name="fas fa-kiwi-bird"
                                      class="icon-spacing"
                                    >
                                      <q-tooltip>
                                        Poultry
                                      </q-tooltip>
                                    </q-icon>
                                    <q-icon
                                      color="teal"
                                      name="fas fa-fish"
                                      class="icon-spacing"
                                    >
                                      <q-tooltip>
                                        Fishery
                                      </q-tooltip>
                                    </q-icon>
                                    <q-icon
                                      color="teal"
                                      name="fas fa-water"
                                      class="icon-spacing"
                                    >
                                      <q-tooltip>
                                        Farmland
                                      </q-tooltip>
                                    </q-icon>
                                    <q-icon
                                      color="teal"
                                      name="fas fa-pepper-hot"
                                      class="icon-spacing"
                                    >
                                      <q-tooltip>
                                        Cash Crop
                                      </q-tooltip>
                                    </q-icon>
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </div>

                          <div class="col-md-5 col-xs-12">
                            <q-list bordered class="q-mr-sm q-mb-sm q-ml-sm">
                              <q-item>
                                <q-item-section>
                                  <q-item-label caption lines="2"
                                    >Settings</q-item-label
                                  >
                                  <q-item-label>
                                    <q-icon
                                      color="teal"
                                      name="fas fa-lock"
                                      class="icon-spacing"
                                      @click="accessAccountConfirm(user)"
                                    >
                                      <q-tooltip>
                                        Access
                                      </q-tooltip>
                                    </q-icon>
                                    <q-icon
                                      color="teal"
                                      name="fas fa-key"
                                      class="icon-spacing"
                                      @click="triggerChangePassword(user)"
                                    >
                                      <q-tooltip>
                                        Password
                                      </q-tooltip>
                                    </q-icon>
                                    <q-icon
                                      color="teal"
                                      name="fas fa-edit"
                                      class="icon-spacing"
                                      @click="triggerUserEdit(user)"
                                    >
                                      <q-tooltip>
                                        Edit
                                      </q-tooltip>
                                    </q-icon>
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </div>

                          <div class="col-md-3 col-xs-12">
                            <q-list bordered class="q-mr-sm q-mb-sm q-ml-sm">
                              <q-item>
                                <q-item-section>
                                  <q-item-label caption lines="2"
                                    >Report</q-item-label
                                  >
                                  <q-item-label>
                                    <q-icon
                                      color="teal"
                                      name="fas fa-file"
                                      class="icon-spacing"
                                    >
                                      <q-tooltip>
                                        Generate Report
                                      </q-tooltip>
                                    </q-icon>
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>

                <div class="paginateContainer">
                  <div
                    class="paginateItems"
                    v-if="
                      this.paginatedParams.start[1] > this.paginatedParams.rate
                    "
                    @click="updatePaginatorParams('decrease')"
                  >
                    Previous
                  </div>
                  <div
                    class="paginateItems"
                    v-if="this.paginatedParams.start[1] < this.usersList.length"
                    @click="updatePaginatorParams('increase')"
                  >
                    Next
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
          <!-- @@@ Userslist Container Ends Here -->

          <q-inner-loading :showing="visible">
            <q-spinner-gears size="50px" color="teal" />
          </q-inner-loading>
        </div>
      </div>
    </q-pull-to-refresh>
  </q-page>
</template>

<script>
import { pick } from "../Repositories/pick";
import { notifier } from "../Repositories/notifier";
import { seo } from "../Repositories/seo";
import { loader } from "../Repositories/loader";
import { alert } from "../Repositories/alert";
import EventBus from "../eventbus/eventbus";
import Connection from "../components/Connection";

export default {
  mixins: [notifier, seo, loader, alert, pick],
  components: {
    "app-connection": Connection
  },

  data() {
    return {
      usersList: [],
      paginatedList: [],
      paginatedParams: {
        start: [0, 20],
        rate: 20
      },
      search: "",
      text: "",
      action: "users_list",
      changePasswordFormData: {},
      userEditFormData: {}
    };
  },
  computed: {
    paginatedListCache: function() {
      return this.paginatedList;
    }
  },

  watch: {
    usersList: function(newVal, oldVal) {
      /** Watches the usersList
       * Filter the currnt users list
       *  And updates the paginatedList
       */
      let x = this;

      var result = newVal.filter(function(number, index) {
        return (
          index >= x.paginatedParams.start[0] &&
          index <= x.paginatedParams.start[1]
        );
      });

      x.paginatedList = result;
    },

    "paginatedParams.start": function(newVal, oldVal) {
      let x = this;

      /** Watches the pagination Params
       * Filter the currnt users list
       *  And updates the paginatedList
       */

      var result = x.usersList.filter(function(number, index) {
        return (
          index >= x.paginatedParams.start[0] &&
          index <= x.paginatedParams.start[1]
        );
      });

      x.paginatedList = result;
    },

    search: function(newVal, oldVal) {
      if (newVal.length < 1) {
        this.api_calls("FETCH_REGISTERED_USERS");
      } else {
        this.api_calls("SEARCH_REGISTERED_USERS");
      }
    }
  },

  methods: {
    triggerChangePassword(x) {
      this.changePasswordFormData = {
        email: x.email,
        password: "",
        password_confirmation: "",
        user_id: x.user_id,
        fullname: x.surname + " " + x.other_names,
        personal_detail_status: x.personal_detail_status
      };
      this.action = "change_password";
    },

    triggerUserEdit(x) {
      this.userEditFormData = {
        id: x.id,
        title: x.title,
        surname: x.surname,
        other_names: x.other_names,
        usename: x.username,

        date_of_birth: x.date_of_birth,
        occupation: x.occupation,
        home_address: x.home_address,
        telephone: x.telephone,
        email: x.email,

        office_address: x.office_address,
        religion: x.religion,
        next_of_kin_name: x.next_of_kin_name,
        next_of_kin_email: x.next_of_kin_email,
        next_of_kin_tel: x.next_of_kin_tel,

        bank_name: x.bank_name,
        acc_name: x.acc_name,
        acc_no: x.acc_no,
        confirmed: x.confirmed,
        personal_detail_status: x.personal_detail_status,
        gender: x.gender,

        fullname: x.surname + " " + x.other_names,
        created_at: x.created_at,
        updated_at: x.updated_at,
      };
      this.action = "user_edit";
    },

    removeAction() {
      this.action = "users_list";
    },

    accessAccountConfirm(obj) {
      var x = this;
      let users_title = obj.title ? obj.title.toUpperCase() : " ";
      this.$q
        .dialog({
          title: "Access Account",
          message:
            "Are you sure you want to access " +
            users_title +
            " " +
            obj.surname.toUpperCase() +
            " " +
            obj.other_names.toUpperCase() +
            " account??",
          cancel: true,
          ok: "Proceed",
          persistent: true
        })
        .onOk(() => {
          // x.$router.push(obj.access_link);
          // let routeData = x.$router.resolve(obj.access_link);
          // window.open(routeData.href, '_blank');
          window.open(obj.access_link);
        })
        .onOk(() => {
          // console.log('>>>> second OK catcher')
        })
        .onCancel(() => {
          // console.log('>>>> Cancel')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },

    resetPaginatorParams() {
      /** This resets the paginator parameter to defaulf */
      var x = this;
      x.paginatedParams = {
        start: [0, 20],
        rate: 20
      };
    },
    updatePaginatorParams(action) {
      var x = this;
      var rate = x.paginatedParams.rate;

      /** Start inner loading */
      x.innerLoading(true);

      if (action == "increase") {
        var left = x.paginatedParams.start[0] + rate;
        var right = x.paginatedParams.start[1] + rate;
      }

      if (action == "decrease") {
        var left = x.paginatedParams.start[0] - rate;
        var right = x.paginatedParams.start[1] - rate;
      }

      x.paginatedParams.start = [left, right];

      /** End inner loading */
      x.innerLoading(false);
    },

    api_params(value) {
      if (value == "FETCH_REGISTERED_USERS") {
        return { token: this.$q.localStorage.getItem("admin_token") };
      }

      if (value == "SEARCH_REGISTERED_USERS") {
        return {
          token: this.$q.localStorage.getItem("admin_token"),
          search: this.search
        };
      }

      if (value == "SUBMIT_CHANGE_PASSWORD") {
        return {
          token: this.$q.localStorage.getItem("admin_token"),
          ...this.changePasswordFormData
        };
      }
    },

    async api_calls(value) {
      let response;
      let x = this;

      if (value == "FETCH_REGISTERED_USERS") {
        // /** Start inner loading */
        // x.innerLoading(true)

        response = await this.$store.dispatch(
          "fetch_registered_users",
          x.api_params(value)
        );

        /** If response contain status */
        if (response && "status" in response) {
          /** If response status is 200 */
          if (response.status == 200) {
            x.resetPaginatorParams();
            x.usersList = response.data.message;
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

        // /** End inner loading */
        //  x.innerLoading(false)
      }

      if (value == "SEARCH_REGISTERED_USERS") {
        /** Start inner loading */
        x.innerLoading(true);

        response = await this.$store.dispatch(
          "search_registered_users",
          x.api_params(value)
        );

        console.log(response);
        /** If response contain status */
        if (response && "status" in response) {
          /** If response status is 200 */
          if (response.status == 200) {
            x.resetPaginatorParams();
            x.usersList = response.data.message;
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

      if (value == "SUBMIT_CHANGE_PASSWORD") {
        /** Start inner loading */
        x.innerLoading(true);

        response = await this.$store.dispatch(
          "registered_users_change_password",
          x.api_params(value)
        );

        console.log(response);
        /** If response contain status */
        if (response && "status" in response) {
          /** If response status is 200 */
          if (response.status == 200) {
            x.showNotif({ type: "success", message: response.data.message });

            /** Clears all input field */
            x.clearInputField(x.changePasswordFormData);

            /** Reset Action */
            x.removeAction();
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
    async refresh(done) {
      /**Refresh page */
      await this.main().then(response => {
        done();
      });
    },

    async main() {
      //updating seo title tag
      this.seoMetaTitle("Registered Users");

      //Event Bus
      EventBus.$emit("page_title", "Registered Users");

      //Preloader
      this.api_calls("FETCH_REGISTERED_USERS");
    }
  },

  async mounted() {
    this.main();
  }
};
</script>

<style scoped>
.buttonBarContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.buttonBarContainer > .items {
}

.buttonBarContainer > .items:first-child {
  /* flex-basis: 300px;
  align-self: flex-start; */
}

.buttonBarContainer > .search {
  width: 100%;
}

.paginateContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: flex-start;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
}

.paginateContainer > .paginateItems {
  height: 40px;
  flex-basis: 40px;
  line-height: 2.5;
  background: #fff;
  margin: 2px;
  text-align: center;
  box-shadow: 2px 2px 2px gray;
  border-radius: 30px;
  color: teal;
  padding: 4px 14px;
  cursor: pointer;
}

.icon-spacing {
  border: 1px solid green;
  padding: 20px;
  border-radius: 20px;
  margin: 4px;
}

.dashboard {
  /* background-image: url("~assets/ict.jpg"); */
  background-position: cover;
  background-position-y: 40%;
}

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




/* @@@@@@@@@@@@@@@@@@@@@@@User Edit style starts here */
.userEditContainer {
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

.userEditContainer > .panelItems:first-child {
  border-bottom: 1px solid #80808045;
}
.userEditContainer > .panelItems:last-child {
  border-top: 1px solid #80808045;
}
/* @@@ User Edit style ends here */



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







.flex-container {
  margin-top: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: center;
}

.flex-container > .flex-items {
  height: 150px;
  width: 200px;
  margin: 5px;
  background: teal;
}

.flex-container > .flex-items > .flex-inner {
  height: 60%;
  background: yellow;
  text-align: center;
}
</style>
