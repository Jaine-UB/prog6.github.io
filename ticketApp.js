let app = Vue.createApp({
    data() {     // returns an object of data
        return {
            results: [], // all data items retrieved from the json file
            showTable:false      
        }
    },
	created() {      // section executes as page loads
		var d = new Date()
		this.time_loaded = d.toLocaleTimeString()
		
		this.getData()  // call method to load json data as page loads
	},
    methods: {    // an object of functions (methods)
        async getData() {
            const response = await fetch('tickets1.json')
            this.results = await response.json()
        },
		getTickets() {
            this.showTable = true
			// filter data form given ticket
			this.tickets = this.results.filter( (ticket) => item.ticket == this.ticket );
			
		}
   },
    
})

app.mount('#ticketApp')   //in which div to mount the vue app
