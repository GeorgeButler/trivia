<template>
	<div v-if="game.isLoading">
		<div class="container">
			<section class="section is-unselectable">
				<h1 class="title has-text-centered">Fetching API Response...</h1>
				<progress class="progress is-primary" max="100">Loading</progress>
			</section>
		</div>
	</div>
	<div v-else>
		<div class="container" v-if="game.isPlaying">
			<section class="section is-unselectable">
				<div class="columns">
					<div class="column has-text-centered">{{ game.currentQuestion + 1 }} / {{ totalQuestions }}</div>
					<div class="column has-text-centered">
						<div class="is-capitalized">{{ currentQuestion.category }}</div>
						<div class="is-capitalized">Difficulty: {{ currentQuestion.difficulty }}</div>
					</div>
				</div>
				<Question v-bind="currentQuestion"></Question>
				<Timer></Timer>
			</section>
		</div>
		<section class="hero is-fullheight is-unselectable" v-else>
			<div class="hero-body">
				<div class="container has-text-centered">
					<h1 class="title has-text-primary">{{ game.currentScore }} / {{ totalQuestions }}</h1>
					<h2 class="subtitle">Congratulations!</h2>
					<div class="columns is-mobile is-centered">
						<div class="column is-half">
							<div class="buttons">
								<button class="button is-primary is-rounded is-large is-fullwidth">Play again?</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Question from '../components/Question'
import Timer from '../components/Timer'

export default {
	name: 'Home',
	components: {
		Question,
		Timer
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
