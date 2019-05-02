export const state = () => ({
	response: {},
	game: {
		currentQuestion: 0,
		currentScore: 0,
		currentAnswer: ''
	}
})

export const mutations = {
	setResponse (state, response) {
		state.response = response
	},
	setAnswer (state, answer) {
		state.game.currentAnswer = answer
		// Advance question
	}
}

export const actions = {
	async getResponse ({ commit }) {
		await this.$axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
			if (res.status === 200) {
				commit('setResponse', res.data)
			}
		})
	},
	async setAnswer ({ commit }) {
		commit('setAnswer', 'YEET')
	}
}
