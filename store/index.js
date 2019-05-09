export const state = () => ({
	response: {
		response_code: -1,
		results: []
	},
	game: {
		isPlaying: true,
		isLoading: true,
		canAction: true,
		canAddPoints: true,
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
	setAnswer (state, { payload }) {
		if (state.game.canAction) {
			state.game.currentAnswer = payload.answer

			if (state.game.canAddPoints) {
				state.game.canAddPoints = false

				if (payload.answer === payload.correct) {
					state.game.currentScore = state.game.currentScore + 1
				}
			}
		}
	},
	setCanAction (state, { payload }) {
		state.game.canAction = payload.canAction
	},
	advanceQuestion (state) {
		let next = state.game.currentQuestion + 1

		if (next < state.response.results.length) {
			state.game.currentQuestion = next
			state.game.currentAnswer = ''
			state.game.canAddPoints = true
		} else {
			state.game.isPlaying = false
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
	},
	async setCanAction ({ commit }, payload) {
		commit('setCanAction', {
			payload
		})
	},
	async advanceQuestion ({ commit }) {
		commit('advanceQuestion')
	}
}
