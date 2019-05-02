const pkg = require('./package')
import webpack from 'webpack'

module.exports = {
	mode: 'universal',

	/*
  ** Headers of the page
  */
	head: {
		title: pkg.name,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
	},

	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },

	/*
  ** Global CSS
  */
	css: [
		{ src: '~/assets/css/main.scss', lang: 'scss' },
		{ src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
	],

	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],

	/*
  ** Nuxt.js modules
  */
	modules: [ '@nuxtjs/axios' ],
	/*
  ** Axios module configuration
  */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
  ** Build configuration
  */
	build: {
		plugins: [
			new webpack.ProvidePlugin({
				_: 'lodash'
			})
		]
	}
}
