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
   connect: (id) => `${BS}/api/room/ws/${id}`,
   subscribe: (id)=> `${BS}/api/room/topic/${id}`,
   sendTo: (id) => `${BS}/api/room/sendto/${id}`
}


const auctionJSON = {
   price: 3432,
   status : "open"
}

const auctionLoadJSON = {
   id: 23,
   photo: "https/oleg/domination",
   name: "oleg",
   description: "sussy blue balls",

   status: "active",
   expirationDate: "23-45",
   price: 45454,

   fundNAME: "Pritula",
   fundPercentage: 50,
}



const CHAT = {
   // rest
   getMessages: (id) => `${BS}/api/v2/getmessages/${id}`,
   // sockets
   connect: (id) => `${BS}/api/chat/ws${id}`,
   subscribe: (id) => `${BS}/api/chat/topic/${id}`,
   sendTo: (id) => `${BS}/api/chat/sendto/${id}`
}


const chatJSON = {
   username: "oleg",
   color: "#ginger",
   message: "Fortnite balls am gay"
}
// getMessages - gets Array of chatJSON



export {REST, AUCTION, CHAT};
