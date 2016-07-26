<template>
  <div>
    <display></display>
    <increment></increment>    
    <decrement></decrement>
    <increment-amount></increment-amount>
  </div>
</template>

<script>
import Display from './components/Display.vue'
import Increment from './components/Increment.vue'
import Decrement from './components/Decrement.vue'
import IncrementAmount from './components/IncrementAmount.vue'
import store from './vuex/store.js'

export default {
  components: {
    Display,
    Increment,
    Decrement,
    IncrementAmount
  },
  store
}  

</script>