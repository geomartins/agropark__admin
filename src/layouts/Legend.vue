<template>
 <q-layout view="lHr lpR fFf">
  <!-- lHr lpR lFf -->

   <!-- linear-gradient(45deg,#77854796,#778547) -->
    <q-header elevated  class=" bg-white text-grey-8" >
      <q-toolbar>
        <q-btn dense flat round icon="menu"  @click="drawer = !drawer"  />

        <q-toolbar-title class="text-body1" >
         
          <!-- Title -->
          {{ page_title }}
        </q-toolbar-title>

        

          <q-avatar>
            
             <img src="statics/default.png" @click="dropdown = !dropdown" >
          </q-avatar>
         

          

          


        <!-- <q-btn-dropdown   color="teal" unelevated class="float-right " dropdown-icon="account_circle" style="text-transform: capitalize">
          <q-list >
      

            <q-item clickable v-close-popup  @click="logout()">
              <q-item-section avatar>
                <q-avatar icon="fas fa-sign-out-alt" color="teal" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator/>

            
          </q-list>
        </q-btn-dropdown> -->


        

        


      </q-toolbar>


         
    </q-header>

    <!-- <q-drawer show-if-above v-model="left" side="left" bordered>
    </q-drawer> -->

    <!-- <q-drawer show-if-above v-model="right" side="right" :width="200" :content-style="{ backgroundColor: '#eee' }" bordered> -->
      <!-- drawer content -->
    <!-- </q-drawer> -->


    <q-drawer
        v-model="drawer"
        show-if-above
        :width="300"
        :breakpoint="900"
        bordered
        content-class="bg-grey-3"
     >
        <q-scroll-area class="fit" style=" margin-top: 10px;">

          <!-- <q-list>
            <router-link to='/dashboard' class="text-weight-regular text-grey-10"  style='text-decoration: none' exact>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-home" color="green-6" size="sm"/>
              </q-item-section>
              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>
            </router-link>
           <q-separator  />
          </q-list> -->



          <q-list v-for="(menuItem, index) in gridList()" :key="index">
           
            <router-link :to='menuItem.url' class="text-weight-regular text-grey-10"  style='text-decoration: none' exact>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" color="green-6" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            </router-link>
           

           <q-separator  />

          </q-list>
           


          <q-list>
            <q-item clickable v-ripple class="text-weight-regular text-grey-10"  @click="logout()">
              <q-item-section avatar>
                <q-icon name="fas fa-sign-out-alt" color="green-6" />
              </q-item-section>
              <q-item-section>
                Logout
              </q-item-section>
            </q-item>
           <q-separator  />
          </q-list>

        </q-scroll-area>
        

        <!-- <q-img class="absolute-top image_user"  style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img :src="displayAvatar()">
            </q-avatar>

            
            <div class="text-weight-bold"> {{ $q.localStorage.getItem('surname') +' ' +$q.localStorage.getItem('other_names') }}</div>
            <div>@{{ $q.localStorage.getItem('username') }}</div>
          </div>
        </q-img> -->
      </q-drawer>




     

      



    <q-page-container>
      
      <router-view />
    </q-page-container>


   

  </q-layout>
  
</template>

<script>



import {pick} from '../Repositories/pick'
import { notifier } from '../Repositories/notifier'
import { seo } from '../Repositories/seo'
import { loader } from '../Repositories/loader'
import { alert } from '../Repositories/alert'
import EventBus from '../eventbus/eventbus'
export default {
  mixins: [ notifier, seo, loader, alert, pick,],
  
  data () {
    return {
      page_title: '',
      drawer: false,
      dropdown: false,
      
      left: false,
      right: false
    }
  },
  methods: {

  
   
   async logout(){

      let x = this;
      let response;

      
      /** Start loader gif */
      this.showLoading();


        
         /** Remove all credentials */
        x.removeCredentials();

             
        /** Redirects to homepage */
        x.$router.push('/');



        /** End loader gif */
        this.hideLoading();

      }




     
                     

      
    
  },
  async created(){

    let x = this;
    EventBus.$on('page_title', (payload) => {
      x.page_title = payload;
     
    })
  },

  
}

</script>


<style>

/* .bg-teal{
  background: linear-gradient(45deg,#77854796,#778547) !important;
  background: #a8cf45 !important;

} */

/* .text-teal{
  color: #779b1b !important;

} */
 .a[href]{
   text-decoration: none!important;
 }

 

.image_user {
  background-image: url("~assets/trace.png");
  background-position-y: 40%;
  background-position-x: 10%

  /* background-position: bottom;
  background-repeat: repeat-x; */
  /* background-size: cover; */
}

.image_user:before {
  content: "";
  position: absolute;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background: rgba(0,0,0,.4);
}

@media screen and (max-width: 1000px) {
 .visible_small{
    display: block;
  }
  .myCard {
    border-bottom-right-radius: 10px!important;
    height:100vh!important;
    
  }

  .myCard2 {
    border-bottom-right-radius: 10px!important;
    padding-bottom: 500px!important;
    
  }
  .q-tab-panel{
    padding-left: 0px!important;
    padding-right: 0px!important;
  }

  .visible_large{
    display: none;
  }
}

@media screen and (min-width: 1001px) {
 .visible_small{
    display: none;
  }

  .visible_large{
    display: block;
  }
}






















.md-stepper-horizontal {
	display:table;
	width:100%;
	margin:0 auto;
	background-color:#FFFFFF;
	/* box-shadow: 0 3px 8px -6px rgba(0,0,0,.50); */
}
.md-stepper-horizontal .md-step {
	display:table-cell;
	position:relative;
	padding:14px;
}
/* .md-stepper-horizontal .md-step:hover,
.md-stepper-horizontal .md-step:active {
	background-color:rgba(0,0,0,0.04);
} */
.md-stepper-horizontal .md-step:active {
	border-radius: 15% / 75%;
}
.md-stepper-horizontal .md-step:first-child:active {
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
}
.md-stepper-horizontal .md-step:last-child:active {
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}
.md-stepper-horizontal .md-step:hover .md-step-circle {
	background-color:#757575;
}
.md-stepper-horizontal .md-step:first-child .md-step-bar-left,
.md-stepper-horizontal .md-step:last-child .md-step-bar-right {
	display:none;
}
.md-stepper-horizontal .md-step .md-step-circle {
	width:30px;
	height:30px;
	margin:0 auto;
	background-color:#999999;
	border-radius: 50%;
	text-align: center;
	line-height:30px;
	font-size: 14px;
	font-weight: 400;
	color:#FFFFFF;
}
.md-stepper-horizontal.green .md-step.active .md-step-circle {
	background-color:#00AE4D;
}
.md-stepper-horizontal.orange .md-step.active .md-step-circle {
	background-color:#A8CF45;
}
.md-stepper-horizontal .md-step.active .md-step-circle {
	background-color: rgb(33,150,243);
}
.md-stepper-horizontal .md-step.done .md-step-circle:before {
	font-family:'FontAwesome';
	font-weight:100;
	content: "\f00c";
}
.md-stepper-horizontal .md-step.done .md-step-circle *,
.md-stepper-horizontal .md-step.editable .md-step-circle * {
	display:none;
}
.md-stepper-horizontal .md-step.editable .md-step-circle {
	-moz-transform: scaleX(-1);
	-o-transform: scaleX(-1);
	-webkit-transform: scaleX(-1);
	transform: scaleX(-1);
}
.md-stepper-horizontal .md-step.editable .md-step-circle:before {
	font-family:'FontAwesome';
	font-weight:100;
	content: "\f040";
}
.md-stepper-horizontal .md-step .md-step-title {
	margin-top:16px;
	font-size:15px;
	font-weight:400;
}
.md-stepper-horizontal .md-step .md-step-title,
.md-stepper-horizontal .md-step .md-step-optional {
	text-align: center;
	color:rgba(0,0,0,.26);
}
.md-stepper-horizontal .md-step.active .md-step-title {
	font-weight: 600;
	color:rgba(0,0,0,.87);
}
.md-stepper-horizontal .md-step.active.done .md-step-title,
.md-stepper-horizontal .md-step.active.editable .md-step-title {
	font-weight:600;
}
.md-stepper-horizontal .md-step .md-step-optional {
	font-size:12px;
}
.md-stepper-horizontal .md-step.active .md-step-optional {
	color:rgba(0,0,0,.54);
}
.md-stepper-horizontal .md-step .md-step-bar-left,
.md-stepper-horizontal .md-step .md-step-bar-right {
	position:absolute;
	top:36px;
	height:1px;
	border-top:1px solid #DDDDDD;
}
.md-stepper-horizontal .md-step .md-step-bar-right {
	right:0;
	left:50%;
	margin-left:20px;
}
.md-stepper-horizontal .md-step .md-step-bar-left {
	left:0;
	right:50%;
	margin-right:20px;
}
 
</style>


