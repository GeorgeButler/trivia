<template>
	<div>
		<div class="title has-text-centered" v-html="question"></div>
		<div class="buttons is-centered">
			<b-button
				type="is-primary"
				size="is-large"
				v-for="answer in answers"
				:key="answer"
				v-html="answer"
			></b-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		question: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'boolean'
		},
		correct_answer: {
			type: String,
			default: ''
		},
		incorrect_answers: {
			type: Array
		}
	},
	data: function() {
		return {
			answers: []
		}
	},
	methods: {
		updateQuestion: function() {
			this.answers = []
			this.answers.push(this.correct_answer)
			this.answers = this.answers.concat(this.incorrect_answers)

			return this.answers
		}
	},
	watch: {
		question: function(newQuestion, oldQuestion) {
			this.updateQuestion()
		}
	}
}
</script>
