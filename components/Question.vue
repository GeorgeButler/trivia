<template>
	<div>
		<transition name="fade">
			<section class="section" v-if="question">
				<h1 class="title has-text-centered" v-html="question"></h1>
				<div class="buttons">
					<button
						class="button is-primary is-large is-fullwidth"
						v-for="answer in answers"
						v-bind:key="answer"
						v-on:click="clickAnswer(answer, correct_answer)"
						v-html="answer"
					></button>
				</div>
			</section>
		</transition>
	</div>
</template>

<script>
import _ from 'lodash'

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
		},
		type: {
			type: String,
			required: true
		}
	},
	computed: {
		answers: function() {
			let arr = _.clone(this.incorrect_answers)
			arr.push(this.correct_answer)
			_.shuffle(arr)

			return arr
		}
	},
	methods: {
		clickAnswer: function(text, correctText) {
			this.$store.dispatch('setAnswer', {
				answer: text,
				correct: correctText
			})
		}
	}
}
</script>
