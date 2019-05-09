<template>
	<button
		class="button is-primary is-large is-fullwidth is-rounded"
		v-html="text"
		v-on:click="clickAnswer(text)"
		v-bind:class="{ 'is-focused': isSelected, 'is-outlined': !isSelected }"
	></button>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Answer',
	props: {
		text: {
			type: String,
			required: true
		},
		correct: {
			type: String,
			required: true
		}
	},
	computed: {
		...mapState({
			game: state => {
				return state.game
			}
		}),
		isSelected: function() {
			return this.game.currentAnswer === this.text
		}
	},
	methods: {
		clickAnswer: function(text) {
			this.$store.dispatch('setAnswer', {
				answer: text,
				correct: this.correct
			})
		}
	}
}
</script>
