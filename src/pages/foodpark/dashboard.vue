<template>
  <q-page class="dashboard">
    <q-pull-to-refresh @refresh="refresh">
      <div class="row">
        <!-- offset-md-1 -->
        <div class="col-md-12 col-sm-12 col-xs-12 ">
         <app-connection></app-connection>




         

          <!-- ordersList Container Starts Here -->

          <transition-group
            appear
            enter-active-class="animated fadeIn slower"
            leave-active-class="animated fadeOut slower"
          >
            <div v-if="this.action == 'orders_list'" key="buttonBarContainer">
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
                  <q-btn class="q-ma-sm text-green" label="CREATE"  />
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
                  {{ ordersList.length }}
                  {{ ordersList.length > 1 ? "results found" : "result found" }}
                </div>
                <q-list
                  bordered
                  class="rounded-borders q-mt-xs q-mr-sm q-ml-sm"
                  style="border-radius: 10px"
                >
                  <q-expansion-item
                    :default-opened="false"
                    v-for="order in paginatedList"
                    :key="order.id"
                    style="border-bottom: 1px solid rgba(0, 0, 0, 0.12)"
                  >
                    <template v-slot:header>
                      <q-item-section avatar>
                        <div>
                          <q-avatar
                            icon="fas fa-shopping-cart"
                            :color="order.payment_status == 'paid' ? 'teal' : 'pink'"
                            text-color="white"
                          />
                        </div>
                      </q-item-section>

                      <q-item-section>
                        <q-item-label>
                          {{ order.customer_name.toLowerCase() | ucwords }} 
                        </q-item-label>
                        <q-item-label caption>{{order.order_key }}</q-item-label>
                      </q-item-section>

                      <q-item-section side>
                        <div class="row items-center">
                          <!-- {{ order.created_at | dateToHumanReadableForm }} -->
                          {{ order.outlet.toUpperCase() }}
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
                                    {{ order.customer_name.toLowerCase() | ucwords }}
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
                                    {{ order.customer_email }}
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
                                    {{ order.customer_telephone }}
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
                                    >Order ID </q-item-label
                                  >
                                  <q-item-label>
                                    {{ order.order_key}}
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
                                    >Amount </q-item-label
                                  >
                                  <q-item-label>
                                    {{ order.total_cost }}
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
                                    >Payment Medium</q-item-label
                                  >
                                  <q-item-label>
                                    {{
                                      order.payment_medium
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
                                    >Payment Status</q-item-label
                                  >
                                  <q-item-label>
                                    {{
                                      order.payment_status
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
                                      order.created_at | dateToHumanReadableForm
                                    }}
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </div>


                        
                          <!-- <div class="col-md-4 col-xs-12">
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
                                     
                                    >
                                      <q-tooltip>
                                        Access
                                      </q-tooltip>
                                    </q-icon>
                                    <q-icon
                                      color="teal"
                                      name="fas fa-key"
                                      class="icon-spacing"
                                      
                                    >
                                      <q-tooltip>
                                        Password
                                      </q-tooltip>
                                    </q-icon>
                                    <q-icon
                                      color="teal"
                                      name="fas fa-edit"
                                      class="icon-spacing"
                                     
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
                                       
                                    >
                                      <q-tooltip>
                                        Generate Report
                                      </q-tooltip>
                                    </q-icon>
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </div> -->



                          <!-- <div class="col-md-2 col-xs-12">
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
                                      
                                    >
                                      <q-tooltip>
                                        Delete Account
                                      </q-tooltip>
                                    </q-icon>
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </div> -->



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
                    v-if="this.paginatedParams.start[1] < this.ordersList.length"
                    @click="updatePaginatorParams('increase')"
                  >
                    Next
                  </div>
                </div>
              </div>
            </div>
          </transition-group>
          <!-- @@@ ordersList Container Ends Here -->
         

          <q-inner-loading :showing="visible">
            <q-spinner-gears size="50px" color="teal" />
          </q-inner-loading>
        </div>
      </div>
    </q-pull-to-refresh>
  </q-page>
</template>

<script>
import { pick } from "../../Repositories/pick";
import { notifier } from "../../Repositories/notifier";
import { seo } from "../../Repositories/seo";
import { loader } from "../../Repositories/loader";
import { alert } from "../../Repositories/alert";
import Connection from "../../components/Connection";
import EventBus from "../../eventbus/eventbus";
import FilterUser from "../../components/FilterUser"



export default {
  mixins: [notifier, seo, loader, alert, pick],
  components: {
    "app-connection": Connection,
    "app-filter-user" : FilterUser
  },

  data() {
    return {
      preloader: [],
      ordersList: [],
      paginatedList: [],
      paginatedParams: {
        start: [0, 20],
        rate: 20
      },
      search: "",
      action: "orders_list",

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
    ordersList: function(newVal, oldVal) {
      /** Watches the ordersList
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

      var result = x.ordersList.filter(function(number, index) {
        return (
          index >= x.paginatedParams.start[0] &&
          index <= x.paginatedParams.start[1]
        );
      });

      x.paginatedList = result;
    },

    search: function(newVal, oldVal) {
      if (newVal.length < 1) {
        this.api_calls("FETCH_REGISTERED_ORDERS");
      } else {
        this.api_calls("SEARCH_REGISTERED_ORDERS");
      }
    }
  },

  methods: {
    
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

      if (value == "FETCH_REGISTERED_USERS" ) {
        return { token: this.$q.localStorage.getItem("admin_token") };
      }

      if (value == "SEARCH_REGISTERED_USERS") {
        return { token: this.$q.localStorage.getItem("admin_token"), search: this.search
        };
      }

     
    },

    async api_calls(value, id = null) {
      let response;
      let x = this;


      if (value == "FETCH_REGISTERED_ORDERS") {

        response = await this.$store.dispatch(
          "foodpark/fetch_registered_orders",
          x.api_params(value)
        );


        /** If response contain status */
        if (response && "status" in response) {
          /** If response status is 200 */
          if (response.status == 200) {
            x.resetPaginatorParams();
            x.ordersList = response.data.message;
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
      this.seoMetaTitle("Orders");

      //Event Bus
      EventBus.$emit("page_title", "Orders");

      let k  = this.api_calls("FETCH_REGISTERED_ORDERS");
      console.log(k,'ffffffffff')
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












</style>
