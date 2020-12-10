<template>
 <q-layout view="hHh lpR fFf">
<q-header elevated class="bg-teal">
        <q-bar>
          <q-icon name="laptop_chromebook" />
          <div>{{ this.$store.state.config.app_name }}</div>

          <q-space />

          <q-btn dense flat icon="minimize" />
          <q-btn dense flat icon="crop_square" />
          <q-btn dense flat icon="close" />
        </q-bar>

        <div class="q-pa-sm q-pl-md row items-center">
          <div class="cursor-pointer non-selectable">
            <router-link to='/' class="text-white" style="text-decoration: none" exact> Login </router-link>
          </div>

          <div class="q-ml-md cursor-pointer non-selectable">
            <router-link to='/password_reset' class="text-white" style="text-decoration: none" exact> Reset </router-link>
          
          </div>
        </div>
      </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>


  </q-layout>
  
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  created(){
    
  }
}
</script>


