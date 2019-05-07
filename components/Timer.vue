<template>
	<section class="section">
		<progress class="progress is-primary" v-bind:value="timeLeft" max="5000">{{timeLeft}}</progress>
	</section>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Timer',
	data: function() {
		return {
			timeLeft: 5000
		}
	},
	computed: {
		...mapState({
			game: state => {
				return state.game
			}
		})
	},
	methods: {
		tick: function() {
			if (this.game.isPlaying) {
				if (this.timeLeft - 1 > 0) {
					this.timeLeft = this.timeLeft - 1
				} else {
					this.timeUp()
				}
			}
		},
		timeUp: function() {
			this.timeLeft = 5000
			this.$store.dispatch('advanceQuestion')
		}
	},
	mounted() {
		// 1 Second initial delay, to prevent weirdness
		setTimeout(() => setInterval(() => this.tick(), 1), 1000)
	}
}
</script>
