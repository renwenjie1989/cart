import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 0
}

const mutations = {
	INCREMENT (state, amount) {
		state.count = state.count + amount
	},
	DECREMENT (state) {
		state.count = state.count - state.message
	},
	UPDATE_AMOUNT (state, valueMessage) {
		state.message = valueMessage
	}
}

export default new Vuex.Store({
	state,
	mutations
})