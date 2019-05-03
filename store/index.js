export const state = () => ({
  response: {},
  game: {
    currentQuestion: 0,
    currentScore: 0,
    currentAnswer: ''
  }
})

export const mutations = {
  setResponse(state, response) {
    state.response = response
  },
  advanceQuestion(state) {
    state.game.currentQuestion = state.game.currentQuestion + 1
  },
  setAnswer(state, answer, correct) {
    state.game.currentAnswer = answer

    console.log(correct)
    if (answer === correct) {
      console.log("NICE!")
    }
  }
}

export const actions = {
  async getResponse({
    commit
  }) {
    await this.$axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
      if (res.status === 200) {
        commit('setResponse', res.data)
      }
    })
  },
  async setAnswer({
    commit
  }, payload) {
    commit('setAnswer', payload.answer, payload.correct)
    //commit('advanceQuestion')
  }
}
