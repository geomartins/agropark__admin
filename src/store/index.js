import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import passwordreset from './passwordreset'
import registeredusers from './registeredusers'
import reports from './reports'
import foodpark from './foodpark'
import config from "./config"

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      login,
      passwordreset,
      registeredusers,
      reports,
      foodpark,
      config
    },


    

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
