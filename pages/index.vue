<template>
  <div class="container">
    <section class="section is-unselectable">
      <div class="columns">
        <div class="column has-text-centered">{{ game.currentQuestion + 1 }} / {{ totalQuestions }}</div>
        <div class="column has-text-centered">
          <div>{{ currentQuestion.category }}</div>
          <div>{{ currentQuestion.difficulty }}</div>
        </div>
      </div>
      <Question v-bind="currentQuestion"></Question>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Question from '../components/Question'

export default {
  name: 'Home',
  components: {
    Question
  },
  computed: {
    ...mapState({
      currentQuestion: state => {
        return state.response.results[state.game.currentQuestion]
      },
      game: state => {
        return state.game
      },
      totalQuestions: state => {
        return state.response.results.length
      }
    })
  },
  async fetch({ store }) {
    await store.dispatch('getResponse')
  }
}
</script>
