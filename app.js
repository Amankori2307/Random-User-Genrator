var app = Vue.createApp({
     // template: "<h1>Hello {{firstName}}</h1>",
     data: () => {
          return {
               firstName: "Jade",
               lastName: "West",
               picture: "https://randomuser.me/api/portraits/women/60.jpg",
               email: "random@user.com",
               gender: "female"
          }
     },
     methods: {
          async getUser(){
               const res = await fetch('https://randomuser.me/api')
               const data = await res.json()
               const {results} = data;
               this.email = results[0]["email"]               
               this.gender = results[0]["gender"]               
               this.picture = results[0]["picture"]["large"]               
               this.firstName = results[0]["name"]["first"]               
               this.lastName = results[0]["name"]["last"]               
               console.log(results[0])
          }
     }
})
app.mount("#app")