<template>
	<div>
		<input :value="amount" @input="update">
	</div>
</template>

<script>
import { updateAmount } from '../vuex/action'
export default {
	vuex: {
		actions: {
			update: updateAmount
		}
	}
}
</script>