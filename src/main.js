import { createApp } from 'petite-vue'
import state from './state'
import methods from './methods'
import '@/assets/reset.css'
const app = createApp({
    ...state,
    ...methods
}).mount('#app')
console.log('app is build when', buildTime)
