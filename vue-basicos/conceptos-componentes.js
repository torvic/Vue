Vue.component('CoinDetail', {
	props: ['changePercent', 'title', 'img', 'name'],

	data() {
		return {
			showPrices: false
		}
	},
	created () {
		console.log('created coinDetail...');
		// obtener info de una API
	},

	mounted () {
		console.log('mounted coinDetail...');
		// acceder al DOM 
	},
	methods: {
		toggleShowPrices() {
			this.showPrices = !this.showPrices
			this.$emit('change-color', this.showPrices ? 'ff96c8':'3d3d3d')
		}
	},

	template: `
	<div>
		<img 
			v-on:mouseover='toggleShowPrices' 
			v-on:mouseout='toggleShowPrices' 
			v-bind:src="img" 
			v-bind:alt="name"
		>

		<slot></slot>
		<slot name="text"></slot>
		<slot name="link"></slot>

		<h1 v-bind:class="changePercent > 0 ? 'green': 'red'">
			{{ title }}
			<span v-if='changePercent > 0'>Boomm Boomm !!!</span>
			<span v-else-if='changePercent < 0'>Boom !!!</span>
			<span v-else>No Boom !!!</span>
		</h1>
	</div>
	`
})


new Vue({
	el: '#app',

	data () {
		return {
			name: 'Bitcoin',
			symbol: 'BTC',
			img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
			changePercent: -1,

			value: 0,
			price: 8400,
			color: 'f4f4f4',

			prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
			pricesWhitDays: [
				{ day: 'Lunes', value: 8400 },
				{ day: 'Martes', value: 7900 },
				{ day: 'Miercoles', value: 8200 },
				{ day: 'Jueves', value: 9000 },
				{ day: 'Viernes', value: 9400 },
				{ day: 'Sabado', value: 10000 },
				{ day: 'Domingo', value: 10200 },
			],
			showPrices: false
		}
	},
	/* Computed Properties y Watchers */
	computed: {
		title () {
			return `${this.name} - ${this.symbol}`
		},

		convertedValue () {
			if (!this.value) {
				return 0
			} else {
				return this.value / this.price
			}
		}
	},

	watch: {
		showPrices (newValue, oldValue) {
			console.log(newValue, oldValue);
		}
	},

	created () {
		console.log('created...');
		// obtener info de una API
	},

	mounted () {
		console.log('mounted...');
		// acceder al DOM 
	},

	methods: {
		updateColor (color) {
			this.color = color || this.color.split('').reverse().join('')
		},

		toggleShowPrices() {
			this.showPrices = !this.showPrices
		}
	}
})