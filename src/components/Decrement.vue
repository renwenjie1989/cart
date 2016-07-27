<template>
	<div>
		<button @click='decrement'>Decrement - 1</button>
	</div>
</template>

<script>
import { decrementCounter, updateAmount } from '../vuex/action'
export default {
	vuex: {
		actions: {
			decrement: decrementCounter
		}
	}
}
</script>