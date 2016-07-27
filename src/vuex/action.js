export const incrementCounter = function ({dispatch, state}) {
	dispatch('INCREMENT', 2)
}
export const decrementCounter = function ({dispatch, state}) {
	dispatch('DECREMENT', state.message)
}
export const updateAmount = function ({dispatch, state}, message) {
	dispatch('UPDATE_AMOUNT', state.message)
}
