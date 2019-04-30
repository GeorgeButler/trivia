<template>
	<div class="container">
		<section class="section">
			<Question v-bind="questions[this.currentQuestion]"/>
			<b-button @click="submitAnswer" type="is-primary">Next Question</b-button>
		</section>
	</div>
</template>

<script>
import Question from '~/components/Question'

export default {
	name: 'HomePage',
	components: {
		Question
	},
	data: function() {
		return {
			apiResponse: {
				response_code: -1,
				results: []
			},
			currentQuestion: 0,
			currentScore: 0
		}
	},
	computed: {
		questions: function() {
			return this.apiResponse.results
		}
	},
	methods: {
		async fetchQuestions() {
			const response = await this.$axios.$get(
				'https://opentdb.com/api.php?amount=10'
			)

			this.apiResponse = response
		},
		async submitAnswer() {
			this.currentQuestion = this.currentQuestion + 1
		}
	},
	mounted: function() {
		this.fetchQuestions()
	}
}
</script>
