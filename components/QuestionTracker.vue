<template>
	<p>{{curQuestionFormatted}} / {{totalQuestions}}</p>
</template>

<script>
export default {
	props: {
		curQuestion: {
			type: Number,
			default: '0'
		},
		totalQuestions: {
			type: Number,
			default: '0'
		}
	},
	computed: {
		curQuestionFormatted: function() {
			return this.curQuestion + 1
		}
	}
}
</script>
