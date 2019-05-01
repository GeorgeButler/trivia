<template>
	<div class="container">
		<section class="section" v-on:click="submitAnswer">
			<QuestionTracker :curQuestion="this.currentQuestion" :totalQuestions="this.questions.length"/>
			<Question v-bind="questions[this.currentQuestion]"/>
			<b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
		</section>
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
		fetchQuestions: async function() {
			const response = await this.$axios.$get(
				'https://opentdb.com/api.php?amount=10'
			)

			if (response) {
				this.apiResponse = response
				this.isLoading = false
			}
		},
		submitAnswer: function() {
			const next = this.currentQuestion + 1

			if (next <= this.questions.length) {
				this.currentQuestion = next
			}
		}
	},
	mounted: function() {
		this.fetchQuestions()
	}
}
</script>
