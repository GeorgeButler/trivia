<template>
	<div>
		<div class="title has-text-centered" v-html="question"></div>
		<div class="buttons is-centered">
			<button
				class="button is-primary is-large is-fullwidth"
				v-for="answer in answers"
				:key="answer"
				v-html="answer"
				@click="clickAnswer('neat')"
			></button>
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
		},
		clickAnswer(clicked) {
			this.$emit('answer', clicked)
		}
	},
	watch: {
		question: function(newQuestion, oldQuestion) {
			this.updateQuestion()
		}
	}
}
</script>
