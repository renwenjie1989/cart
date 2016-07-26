export const incrementCounter = function ({dispatch, state}) {
	dispatch('INCREMENT', 2)
}
export const decrementCounter = function ({dispatch, state}) {
	dispatch('DECREMENT', 2)
}