<template>
  <q-page class="dashboard">
    <div class="row q-mt-lg ">

        

       <div  v-for="(grid,index) in gridList()" :key='grid+index' :class="grid.boxSize" class="q-pl-sm q-pr-sm">
        <router-link tag='a' :to='grid.url'>
         
              <div :class="grid.bgColor">
                  <div class="info-box-icon"><i :class="grid.icon" style="color: #a8cf45"></i> </div>
                  <div style="text-align: center;">
                     
                      <span class="info-box-text text-white"> {{ grid.label }}</span>
                  </div>
                  <!-- /.info-box-content -->
              </div>
        
        </router-link>
          <!-- /.info-box -->
      </div>
      


     


    

   



      
      
    </div>

  </q-page>
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
  data(){
    return {
      
    }
  },
  
  methods: {


  },
  created(){


    //updating seo title tag
    this.seoMetaTitle('Dashboard')
    EventBus.$emit("page_title",'Dashboard')

  },
//   beforeRouteEnter (to, from, next) {

//     next(vm => {

//       /** Middleware A **/
//       if(vm.authMiddleware() == false){
//         vm.removeCredentials();
//         vm.$router.push('/');

//       }
     
//       /** Middleware B **/
//       if(vm.completeProfileMiddleware() == false){
//         vm.showNotif({type: 'warning', position: 'top-right', message: 'Kindly update your personal details' });
//         vm.$router.push('/personal_details')

//       }
      
//     })
//   }
  

};
</script>


<style scoped>

.dashboard {
  /* background-image: url("~assets/ict.jpg"); */
    background-position: cover;
    background-position-y: 40%;
  

}




.state-overview a {
    color: #fff;
    text-decoration: none;
}
a {
    text-shadow: none;
    color: #337ab7;
}
a {
    color: rgb(255,64,129);
    font-weight: 500;
}
a, .mdl-accordion, .mdl-button, .mdl-card, .mdl-checkbox, .mdl-dropdown-menu, .mdl-icon-toggle, .mdl-item, .mdl-radio, .mdl-slider, .mdl-switch, .mdl-tabs__tab {
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
}
a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
*, ::after, ::before {
    box-sizing: border-box;
}
.state-overview {
    color: #fff;
}



.bg-b-pink {
    background: linear-gradient(45deg,#0000007a,black) !important;
}

.bg-b-green {
    background: linear-gradient(45deg,#77854796,#778547) !important;
}
.bg-b-yellow {
    background: linear-gradient(45deg,#0000007a,black) !important
}
.bg-b-blue {
    background: linear-gradient(45deg,#77854796,#778547) !important;
}

.info-box {
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
    min-height: 100px;
    background: #fff;
    width: 100%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
    -webkit-box-shadow: 0 5px 20px rgba(0, 0, 0, .1);
    margin-bottom: 20px;
    padding: 15px;
}
*, ::after, ::before {
    box-sizing: border-box;
}



*, ::after, ::before {
    box-sizing: border-box;
}
.state-overview a {
    color: #fff;
}
a {
    text-shadow: none;
    color: #337ab7;
}
a {
    color: rgb(255,64,129);
    font-weight: 500;
}
a {
    color: #fff;
}

.info-box-icon {
    display: table;
    margin: auto;
    /* //margin-left: 35%; */
    height: 70px;
    width: 70px;
    text-align: center;
    font-size: 30px;
    line-height: 74px;
    background: rgba(0, 0, 0, .2);
    border-radius: 100%;
}




.info-box-text, .progress-description {
    display: block;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 20px;
    font-weight: 400;
}



 .grid-box{
  border: 1px dotted black;
  width: 150px;
  height: 90px;
  margin: 25px;
  border-radius: 50%;
  font-size: 12px;
 }

 .grid-box-child{
   margin: auto
 }

</style>
