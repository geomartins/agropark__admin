<template>
  <q-page class="dashboard">
    <q-pull-to-refresh @refresh="refresh">
      <div class="row">
        <!-- offset-md-1 -->
        <div class="col-md-12 col-sm-12 col-xs-12 ">
         <app-connection></app-connection>


          <app-change-users-password v-if="this.action == 'change_password'" @close='action =  $event' :user="this.changePasswordPropsData"></app-change-users-password>

          <app-edit-user-profile v-if="this.action == 'user_edit'" @close='action =  $event' @refresh='refresh(main)' :user="this.userEditPropsData" :preloader="this.preloader" ></app-edit-user-profile>


          <app-create-user v-if="this.action == 'create_user'" @close='action =  $event' @refresh='refresh(main)'  :preloader="this.preloader" ></app-create-user>

          <app-filter-user v-if="this.action == 'filter_user'" @close='action =  $event'></app-filter-user>

         



         

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
                  <q-btn class="q-ma-sm text-green" label="CREATE" @click="triggerCreateUser()" />
                </div>

                <div class="items">
                  <router-link to='/report'>
                       <q-btn class="q-ma-sm text-green" label="REPORT"/>
                  </router-link>
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

                          <div class="col-md-4 col-xs-12">
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

                          <div class="col-md-2 col-xs-12">
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
                                       @click="triggerUserReport(user)"
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



                          <div class="col-md-2 col-xs-12">
                            <q-list bordered class="q-mr-sm q-mb-sm q-ml-sm">
                              <q-item>
                                <q-item-section>
                                  <q-item-label caption lines="2"
                                    >Trash</q-item-label
                                  >
                                  <q-item-label>
                                    <q-icon
                                      color="teal"
                                      name="fas fa-trash-alt"
                                      class="icon-spacing"
                                       @click="triggerUserRemove(user)"
                                    >
                                      <q-tooltip>
                                        Delete Account
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
import Connection from "../components/Connection";
import EventBus from "../eventbus/eventbus";
import ChangeUsersPassword from "../components/ChangeUsersPassword"
import EditUserProfile from "../components/EditUserProfile"
import CreateUser from "../components/CreateUser"
import FilterUser from "../components/FilterUser"



export default {
  mixins: [notifier, seo, loader, alert, pick],
  components: {
    "app-connection": Connection,
    "app-change-users-password" : ChangeUsersPassword,
    "app-edit-user-profile" : EditUserProfile,
    "app-create-user" : CreateUser,
    "app-filter-user" : FilterUser
  },

  data() {
    return {
      preloader: [],
      usersList: [],
      paginatedList: [],
      paginatedParams: {
        start: [0, 20],
        rate: 20
      },
      search: "",
      action: "users_list",

      userEditPropsData: {},
      changePasswordPropsData: {}
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
      this.action = "change_password";
      this.changePasswordPropsData = x;
    },

    triggerUserRemove(obj){

      var x = this;
      let users_title = obj.title ? obj.title.toUpperCase() : " ";
      this.$q
        .dialog({
          title: "Delete Account",
          message:
            "Are you sure you want to delete " +
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
          x.api_calls('REMOVE_REGISTERED_USERS',obj.id);
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


    triggerUserReport(obj){
          let x = this;
          x.api_calls('REGISTERED_USERS_REPORT',obj.id);
    },

    triggerUserEdit(x) {
      this.action = "user_edit";
      this.userEditPropsData = x;
    },

    triggerCreateUser(){
       this.action = "create_user";

    },

     triggerFilterUser(){
       this.action = "filter_user";

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


      if (value == "REGISTERED_USERS_REPORT" ) {
        return { token: this.$q.localStorage.getItem("admin_token")};
      }

      if (value == "REMOVE_REGISTERED_USERS" ) {
        return { token: this.$q.localStorage.getItem("admin_token")};
      }


      if (value == "FETCH_REGISTERED_USERS" ) {
        return { token: this.$q.localStorage.getItem("admin_token") };
      }

      if (value == "FECTH_REGISTER_USERS_PRELOADER" ) {
        return { token: this.$q.localStorage.getItem("admin_token") };
      }

      if (value == "SEARCH_REGISTERED_USERS") {
        return {
          token: this.$q.localStorage.getItem("admin_token"),
          search: this.search
        };
      }
    },

    async api_calls(value, id = null) {
      let response;
      let x = this;




      
       if (value == "REGISTERED_USERS_REPORT") {

        /** Start inner loading */
        x.innerLoading(true)

        response = await this.$store.dispatch(
          "registered_users_report",
          {... x.api_params(value), user_id: id }
        );

        console.log(response)

        /** If response contain status */
        if (response && "status" in response) {
          /** If response status is 200 */
          if (response.status == 200) {

             x.showNotif({ type: "success", message: response.data.message });
            
            
           
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
         x.innerLoading(false)
      }


       if (value == "REMOVE_REGISTERED_USERS") {

        /** Start inner loading */
        x.innerLoading(true)

        response = await this.$store.dispatch(
          "remove_registered_users",
          {... x.api_params(value), user_id: id }
        );


        /** If response contain status */
        if (response && "status" in response) {
          /** If response status is 200 */
          if (response.status == 200) {

             x.showNotif({ type: "success", message: response.data.message });
             x.main();
            
           
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
         x.innerLoading(false)
      }




      if (value == "FECTH_REGISTER_USERS_PRELOADER") {
        // /** Start inner loading */
        // x.innerLoading(true)

        response = await this.$store.dispatch(
          "fetch_registered_users_preloader",
          x.api_params(value)
        );

        /** If response contain status */
        if (response && "status" in response) {
          /** If response status is 200 */
          if (response.status == 200) {
            
            x.preloader = response.data.message;
           
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

      if (value == "FETCH_REGISTERED_USERS") {
        // /** Start inner loading */
        // x.innerLoading(true)

        response = await this.$store.dispatch(
          "fetch_registered_users",
          x.api_params(value)
        );

        // if(response == 'undefined' || response == undefined){
        //   x.api_calls(value);
        // }

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
      this.api_calls('FECTH_REGISTER_USERS_PRELOADER')
      this.api_calls("FETCH_REGISTERED_USERS");
    }
  },

  async created() {
    this.main();
  },


  
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
