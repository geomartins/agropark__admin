<template>
  <div>
          
          <transition-group
            appear
            enter-active-class="animated fadeInDown slower"
            leave-active-class="animated fadeOutUp slower"
          >
            <div
              class="filterUserContainer "
             
              key="filterUserContainer "
            >
              <div class="filterUserItems">
                <q-item
                 
                  style="background: rgba(128, 128, 128, 0.09) none repeat scroll 0% 0%"
                >
                  <q-item-section avatar>
                    <q-avatar
                      color="teal"
                      text-color="white"
                      icon="fas fa-search"
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
                        >FILTER USER</q-btn
                      >

                      
                    </div>
                  </q-item-section>
                </q-item>
              </div>

              <div class="panelItems">
               

                <div class="row">

                    
                  <div class="col-md-3 col-xs-12 col-sm-3 col lg-12" style="border-right: 1px solid #80808045">

                      
                    <div class="customSubtitle text-subtitle" style="margin-top: 10px">Database Table</div>
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-lg">
                         <q-select outlined stack-label v-model="joiner" :options="options.joiner"  dense  label="Select Table" />
                    </div>


                    <div class="customSubtitle text-subtitle" style="margin-top: 10px">Filter Parameters</div>

                    <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                         <q-select outlined stack-label v-model="joiner" :options="options.joiner"  dense  label="Joiner" />
                    </div>

                    <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                         <q-select outlined stack-label v-model="column" :options="options.column" dense  label="Column" />
                    </div>

                    <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                         <q-select outlined stack-label v-model="ternary" :options="options.ternary" dense  label="Ternary" />
                    </div>

                    <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                        <q-input type="text" outlined v-model="search"  @keyup="searcher($event)" label="Search" stack-label dense />
                    </div>

                    <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">
                        <q-btn
                        class=" text-white bg-teal text-capitalize"
                        flat
                        @click="addFilter()"
                        label="Add Filter" style="width: 100%"
                        />
                    </div>

                    
                  </div>

                  <div class="col-md-9 col-xs-12 col-sm-9 col lg-12">
                     <div class="q-mt-md q-mr-md q-ml-md q-mb-sm">

                        
                        <div class="row">
                          <div class="col-md-12 col-xs-12">

                            
                             
                            <q-list bordered class="q-mr-sm q-mb-sm q-ml-sm" v-for="(data,index) in this.formData" :key="index+'dkdk'">
                              <q-item>
                                <q-item-section>
                                  <q-item-label caption lines="2"
                                    >Filter {{ index + 1}}</q-item-label
                                  >
                                  <q-item-label class="try">

                                    <div class="tryItems">

                                        <q-list>
                                            <q-item>
                                                <q-item-section>
                                                 <q-item-label caption lines="2"> Joiner </q-item-label>
                                                 <q-item-label > {{ data.joiner}} </q-item-label>
                                                </q-item-section>
                                            </q-item>
                                        </q-list>

                                    </div>


                                    <div class="tryItems">
                                        <q-list>
                                            <q-item>
                                                <q-item-section>
                                                 <q-item-label caption lines="2"> Column </q-item-label>
                                                 <q-item-label > {{ data.column}} </q-item-label>
                                                </q-item-section>
                                            </q-item>
                                        </q-list>

                                    </div>

                                    <div class="tryItems">

                                        <q-list>
                                            <q-item>
                                                <q-item-section>
                                                 <q-item-label caption lines="2"> Ternary </q-item-label>
                                                 <q-item-label > {{ data.ternary}} </q-item-label>
                                                </q-item-section>
                                            </q-item>
                                        </q-list>


                                    </div>
                                    <div class="tryItems">

                                        <q-list>
                                            <q-item>
                                                <q-item-section>
                                                 <q-item-label caption lines="2"> Search </q-item-label>
                                                 <q-item-label > {{ data.search}} </q-item-label>
                                                </q-item-section>
                                            </q-item>
                                        </q-list>

                                        
                                    </div>
                                  </q-item-label>
                                </q-item-section>


                                <q-item-section side>
                                     <q-icon name="highlight_off" style="cursor: pointer" color="red" @click="removeFilter(index)"/>
                                </q-item-section>


                              </q-item>
                            </q-list>
                          </div>
                        </div>
                      



                    </div>

                    <div class="panelItemsBottom q-pt-sm q-pb-sm q-ml-sm" >
                        <q-btn
                        class="q-ml-md q-mr-sm text-white bg-red text-capitalize"
                        flat
                        label="Close"
                        @click.prevent="close()"
                        />
                        <q-btn
                        class="q-ma-sm text-white bg-teal text-capitalize"
                        flat
                        @click="api_calls('SUBMIT_FILTER_USER')"
                        label="Start Filter"
                        />
                    </div>
                  </div>

                  


               
                  
                </div>


               

                
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
 props: [],
  data(){
      return {
        formData : [

        ],

        joiner: "",
        column: '',
        ternary: "",
        search: "",

        options: {
            joiner: ['where','orWhere','whereDate','whereMonth','whereYear'],
            column: ['surname','other_names','email','date_of_birth','home_address','office_address'],
            ternary: ['equalsTo','lessThan','greaterThan','like'],

        }



          
    }
  },
  
  watch: {

  },

  methods: {
    searcher(event){
        console.log(event.target.value)
        this.search = event.target.value;
    },
    addFilter(){

        let x = this;

        if(x.joiner && x.column && x.ternary){
            
            x.formData.push(
                {
                  joiner: this.joiner,
                  column: this.column,
                  ternary: this.ternary,
                  search: this.search,
                }
            );
            x.clearFilterParams();
        }else{
            x.showNotif({ type: "warning", message: 'Joiner, Column and Ternary vaalue are required' });

        }
        

    },

    clearFilterParams(){
        this.joiner = "";
        this.column = "";
        this.ternary = "";
        this.search = "";
    },

    removeFilter(index){
        let x = this;

        x.formData.splice(index,1);
    },
    api_params(value) {
      if (value == "SUBMIT_FILTER_USER") {
        return { token: this.$q.localStorage.getItem("admin_token"), filter: this.formData };
      }
    },
    async api_calls(value){

        let response;
        let x = this;


        if(value =="SUBMIT_FILTER_USER"){

            
        /** Start loader gif */
        x.showLoading();

          await this.$store.dispatch("registered_users_report", x.api_params(value));

          setTimeout(function(){
            /** End loader gif */
            x.hideLoading();
          }, 5000);


            /** Start loader gif */
            x.showLoading();
        }


        // if (value == "SUBMIT_FILTER_USER") {



        //     response = await this.$store.dispatch(
        //     "registered_users_report",
        //     x.api_params(value)
        //     );


           


        //     // console.log(response)

        //     /** If response contain status */
        //     if (response && "status" in response) {
        //     /** If response status is 200 */
        //     if (response.status == 200) {
        //         x.showNotif({ type: "success", message: response.data.message });

        //         // /** Clears all query */
        //         // x.clearInputField(x.query);

        //         //  /** Clears all formData */
        //         // x.formData = [];




        //         // /** Reset Action */
        //         // x.close();
        //         // x.refresh()
        //     }

        //     /** If response status is 400 or 404 */
        //     if (response.status.toString().includes(40) == true) {
        //         x.showNotif({ type: "warning", message: response.data.message });

        //         if (response.data.message.includes("Unauthenticated") == true) {
        //         x.removeCredentials();
        //         x.$router.push("/");
        //         }
        //     }

        //     /** If response contains error */
        //     if (response.data.errors) {
        //         x.showNotif({ type: "warning", message: response.data.errors });
        //     }
        //     }

        //     /** End loader gif */
        //     x.hideLoading();
        // }
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

.filterUserContainer {
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

.filterUserContainer > .panelItems:first-child {
  border-bottom: 1px solid #80808045;
}
.filterUserContainer > .panelItems:last-child {
  border-top: 1px solid #80808045;
}

.panelItemsBottom{
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


.try{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start

}

.tryItems{
    border:  1px solid  #80808045;
    margin: 10px;
    /* background: grey; */
    flex-basis: 150px;
}



</style>