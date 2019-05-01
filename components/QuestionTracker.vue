<template>
	<div class="columns">
		<div class="column">
			<div class="has-text-centered is-uppercase">Difficulty: {{difficulty}}</div>
			<div class="has-text-centered is-uppercase">{{category}}</div>
		</div>
		<div class="column">
			<div class="has-text-centered is-uppercase">Question {{curQuestion + 1}} / {{totalQuestions}}</div>
		</div>
	</div>
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
		},
		difficulty: {
			type: String,
			default: ''
		},
		category: {
			type: String,
			default: ''
		}
	}
}
</script>
