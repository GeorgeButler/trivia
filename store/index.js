export const state = () => ({
	data: []
})

export const mutations = {
	SET (state, data) {
		state.data = data
	}
}

export const actions = {
	async fetch ({ commit }) {
		const { data } = await axios.get('https://opentdb.com/api.php?amount=10')
		commit('SET', data)
	}
}
