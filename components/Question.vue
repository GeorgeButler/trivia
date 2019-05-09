<template>
	<div>
		<section class="section" v-if="question">
			<h1 class="title has-text-centered" v-html="question"></h1>
		</section>
		<section class="section">
			<div class="buttons">
				<Answer v-for="answer in answers" :key="answer" :text="answer" :correct="correct_answer"></Answer>
			</div>
		</section>
	</div>
</template>

<script>
import _ from 'lodash'
import Answer from '../components/Answer'

export default {
	name: 'Question',
	components: {
		Answer
	},
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
	}
}
</script>
