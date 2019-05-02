<template>
	<div class="container">
		<section class="section is-unselectable">
			<Question v-bind="currentQuestion"></Question>
		</section>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Question from '../components/Question'

export default {
	name: 'Home',
	async fetch({ store }) {
		await store.dispatch('getResponse')
	},
	components: {
		Question
	},
	computed: {
		...mapState({
			currentQuestion: state => {
				return state.response.results[state.game.currentQuestion]
			}
		})
	}
}
</script>
