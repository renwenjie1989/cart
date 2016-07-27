<template>
	<div>
		<input :value="valueMessage" @input="update">
	</div>
</template>

<script>
import { updateAmount } from '../vuex/action'
export default {
	vuex: {
		actions: {
			update: updateAmount
		}
	},
	methods: {
		update: function(e) {
			vuex.actions.update(e.target.value)
		}
	}
}
</script>