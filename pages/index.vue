<template>
	<div v-if="game.isLoading">
		<h1 class="title">Loading</h1>
	</div>
	<div v-else>
		<div class="container">
			<section class="section is-unselectable" v-if="game.isPlaying">
				<div class="columns">
					<div class="column has-text-centered">{{ game.currentQuestion + 1 }} / {{ totalQuestions }}</div>
					<div class="column has-text-centered">
						<div class="is-capitalized">{{ currentQuestion.category }}</div>
						<div class="is-capitalized">Difficulty: {{ currentQuestion.difficulty }}</div>
					</div>
				</div>
				<Question v-bind="currentQuestion"></Question>
			</section>
			<section class="section is-unselectable" v-if="!game.isPlaying">
				<div class="columns">
					<div class="column has-text-centered">
						<h1 class="title">Final Score</h1>
						<div class="is-capitalized">{{ game.currentScore }} / {{ totalQuestions }}</div>
					</div>
				</div>
			</section>
		</div>
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
