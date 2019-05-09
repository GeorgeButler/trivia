<template>
	<section class="section">
		<progress class="progress is-primary" v-bind:value="timeLeft" max="5000">Time Left: {{timeLeft}}</progress>
	</section>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Timer',
	data: function() {
		return {
			timeLeft: 5000,
			doTick: true,
			intervalFunc: null
		}
	},
	computed: {
		...mapState({
			game: state => {
				return state.game
			}
		}),
		timeLeftCalc: function() {
			return true
		}
	},
	methods: {
		tick: function() {
			if (this.game.isPlaying && this.doTick) {
				if (this.timeLeft - 1 > 0) {
					this.timeLeft = this.timeLeft - 1
				} else {
					this.doTick = false
					this.$store.dispatch('setCanAction', { canAction: false })

					setTimeout(() => {
						this.timeUp()
					}, 3000)
				}
			}
		},
		timeUp: function() {
			this.$store.dispatch('advanceQuestion')
			this.$store.dispatch('setCanAction', { canAction: true })

			this.timeLeft = 5000
			this.doTick = true
		}
	},
	mounted() {
		// 3 Second initial delay, to prevent weirdness
		setTimeout(
			() => (this.intervalFunc = setInterval(() => this.tick(), 1)),
			3000
		)
	},
	beforeDestroy() {
		clearInterval(this.intervalFunc)
	}
}
</script>
