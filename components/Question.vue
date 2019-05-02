<template>
	<section class="section">
		<h1 class="title has-text-centered" v-html="question"></h1>
		<div class="buttons">
			<button
				class="button is-primary is-large is-fullwidth"
				v-for="answer in answers"
				v-bind:key="answer"
			>{{ answer }}</button>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Question',
	props: {
		question: {
			type: String,
			required: true
		},
		correct_answer: {
			type: String,
			required: true
		},
		incorrect_answers: {
			type: Array,
			required: true
		}
	},
	computed: {
		answers: function() {
			let answers = []
			answers = this.incorrect_answers.concat(this.correct_answer)

			return answers
		}
	}
}
</script>
