<template>
	<div class="container">
		<section class="section is-unselectable">
			<QuestionTracker
				v-if="!isLoading"
				v-bind="questions[this.currentQuestion]"
				:curQuestion="this.currentQuestion"
				:totalQuestions="this.questions.length"
			/>
			<Question v-bind="questions[this.currentQuestion]"/>
			<section class="section">
				<div class="has-text-centered is-uppercase">Score: {{currentScore}}</div>
			</section>
		</section>
		<div class="loading" v-if="isLoading"></div>
	</div>
</template>

<script>
import Question from '~/components/Question'
import QuestionTracker from '~/components/QuestionTracker'

export default {
	name: 'HomePage',
	components: {
		Question,
		QuestionTracker
	},
	data: function() {
		return {
			apiResponse: {
				response_code: -1,
				results: []
			},
			isLoading: true,
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

			if (response) {
				this.apiResponse = response
				this.isLoading = false
			}
		},
		submitAnswer(e) {
			console.log(e)

			const next = this.currentQuestion + 1

			if (next < this.questions.length) {
				this.currentQuestion = next
			}
		}
	},
	mounted: function() {
		this.fetchQuestions()
	}
}
</script>
