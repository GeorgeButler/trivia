<template>
	<button
		class="button is-primary is-outlined is-large is-fullwidth is-rounded"
		v-html="text"
		v-on:click="clickAnswer(text)"
		:disabled="isSelected"
	></button>
</template>

<script>
export default {
	name: 'Answer',
	data: function() {
		return {
			isSelected: false
		}
	},
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
	methods: {
		clickAnswer: function(text) {
			//this.isSelected = true
			this.$store.dispatch('setAnswer', {
				answer: text,
				correct: this.correct
			})
		}
	}
}
</script>
