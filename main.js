Vue.component("friend-component", {
	props: ["friend"],
		filters: {
			fullName(value) {
				return `${value.first}  ${value.last}`;
			}
		},
		methods: {
			decrementAge(friend) {
				friend.age = friend.age - 1;
			},
			incrementAge(friend) {
				friend.age = friend.age + 1;
			},
		},
		template: `
		<div>
			<h4>{{friend | fullName}}</h4>
			<h5>age: {{friend.age}}</h5>
			<button v-on:click="decrementAge(friend)">-</button>
			<button v-on:click="incrementAge(friend)">+</button>
			<input v-model="friend.first"/>
			<input v-model="friend.last"/>
		</div>
		`
	});

const app = new Vue({
	el:  "#app",
	data: {
		friends: [
		 {
			first: "Loly",
			last: "LoL",
			age: 34
		},

		 {
			first: "Tony",
			last: "Toms",
			age: 35
		} 
		],

		bobby: {
			first: "Bobby",
			last: "Bobby",
			age: 24
		},

		john: {
			first: "Johny",
			last: "John",
			age: 25
		} 
	}, 
	computed: {
		johnFullName() {
			return `${this.john.first}  ${this.john.last}`
		}

	},
	filters: {
		fullName(value) {
			return `${value.first} ${value.last}`
		}
	},
	

	template: ` 
	<div id=friends>
	<h2>My Friends:</h2>
	<h2>Name: {{bobby | fullName}}</h2>
	<h4>Age: {{bobby.age}}</h4>
	<h2>Name: {{johnFullName}}</h2>
	<h4>Age: {{john.age}}</h4>
	<br></br>
	<h2>Your Friends:</h2>
	<friend-component v-for="item in friends" v-bind:friend="item"/>
	</div>
	`
})