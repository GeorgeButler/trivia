export const state = () => ({
	response: {
		response_code: -1,
		results: []
	},
	game: {
		isPlaying: true,
		isLoading: true,
		currentQuestion: 0,
		currentScore: 0,
		currentAnswer: ''
	}
})

export const mutations = {
	setResponse (state, response) {
		state.response = response
		state.game.isLoading = false
	},
	advanceQuestion (state) {
		let next = state.game.currentQuestion + 1

		if (next < state.response.results.length) {
			state.game.currentQuestion = next
		} else {
			state.game.isPlaying = false
		}
	},
	setAnswer (state, { payload }) {
		state.game.currentAnswer = payload.answer

		if (payload.answer === payload.correct) {
			state.game.currentScore = state.game.currentScore + 1
		}
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
	async setAnswer ({ commit }, payload) {
		commit('setAnswer', {
			payload
		})
		commit('advanceQuestion')
	}
}
