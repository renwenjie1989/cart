<template>
	<div>
		<h3>Count is {{ counterValue.count }}</h3>
	</div>
</template>

<script>
import { getCount } from '../vuex/getters'
export default {
	vuex: {
		getters: {
			counterValue: getCount
		}
	}
}
</script>