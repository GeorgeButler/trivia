<template>
	<div>
		<section class="hero is-fullheight is-unselectable">
			<div class="hero-body">
				<div class="container has-text-centered">
					<h1 class="title has-text-primary big-title">Trivia!</h1>
					<h2 class="subtitle">Test your knowledge in a variety of topics.</h2>
					<div class="columns is-mobile is-centered">
						<div class="column is-half">
							<div class="buttons">
								<nuxt-link to="/game" class="button is-primary is-rounded is-large is-fullwidth">Play</nuxt-link>
							</div>
							<section class="section">
								Questions and answers provided by
								<a href="https://opentdb.com/">OpenTDB</a>.
							</section>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Footer></Footer>
	</div>
</template>

<script>
export default {
	name: 'Home',
	transition: 'bounce'
}
</script>

<style lang="scss" scoped>
.big-title {
	font-size: 7rem;
}
</style>

