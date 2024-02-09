const BS = "http://localhost:8080";

const REST = {
   // auctions
   postCreate: `${BS}/api/v2/saveAuction`,
   getAll: (index, closed, filter) =>
      `${BS}/api/v2/allAuctions?index=${index}&closed=${closed}&filter=${filter}`,
   putChangeValue: (val) => `${BS}/api/v2/changeValue/${id}?value=${val}`,

   // funds
   getFunds: `${BS}/api/v2/funds`

};


const AUCTION = {
   // rest
   getOne: (id) => `${BS}/api/v2/auction/${id}`,

   // sockets
   // connect: (id) => `${BS}/api/room/ws/${id}`,
   connect: () => `${BS}/ws/`,
   subscribe: (id)=> `${BS}/topic/bid/${id}`,
   sendTo: (id) => `${BS}/app/bid/${id}`
}


const auctionJSON = {
   price: 3432,
   status : "open"
   // authorName
}

const auctionLoadJSON = {
   id: 23,
   photo: "https/oleg/domination",
   name: "oleg",
   description: "sussy blue balls",

   status: "active",
   expirationDate: "23-45",
   price: 45454,
//author,contact
   fundNAME: "Pritula",
   fundPercentage: 50,
}



const CHAT = {
   // rest
   getMessages: (id) => `${BS}/api/v2/messages/${id}`,
   // sockets
   connect: () => `${BS}/ws`,
   subscribe: (id) => `${BS}/topic/messages/${id}`,
   sendTo: (id) => `${BS}/app/messages/${id}`
}


const chatJSON = {
   username: "oleg",
   color: "#ginger",
   message: "Fortnite balls am gay"
}
// getMessages - gets Array of chatJSON



export {REST, AUCTION, CHAT};
