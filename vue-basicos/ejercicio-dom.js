new Vue({
  el: '#app',

	data() {
		return {
      courses: [],
      title: '',
      time: null 
		}
	},
  computed: {
		totalTime () {
			let sum = 0;
			this.courses.forEach(el => {
				sum += el.time
			});
			return sum
		}
	},
  
  methods: {
		addCourse() {
			this.courses.push({
				title: this.title,
				time: parseInt(this.time)
			})
			/* form initial state */
			this.title = ''
			this.time = null
		}
	}
})