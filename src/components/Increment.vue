<template>
	<div>
		<button @click='increment'>Increment + 1</button>
	</div>
</template>

<script>
import { incrementCounter } from '../vuex/action'
export default {
	vuex: {
		actions: {
			increment: incrementCounter
		}
	}
}
</script>