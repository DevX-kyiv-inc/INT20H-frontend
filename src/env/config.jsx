const BS = "http://localhost:8080";

const REST = {
   // auctions
   postCreate: `${BS}/api/v2/saveAuction`,
   getAll: (closed, filter) =>
      `${BS}/api/v2/allAuctions?status=${closed}&sort=${filter}`,

   // funds
   getFunds: `${BS}/api/v2/funds`
};

const AUCTION = {
   // rest
   getOne: (id) => `${BS}/api/v2/auction/${id}`,

   // sockets
   // connect: (id) => `${BS}/api/room/ws/${id}`,
   connect: `${BS}/ws`,
   subscribe: (id) => `/topic/bid/${id}`,
   sendTo: (id) => `/app/bid/${id}`,

   currentBid: (id) => `${BS}/api/v2/currentBid/${id}`
};

const CHAT = {
   // rest
   getMessages: (id) => `${BS}/api/v2/messages/${id}`,
   // sockets
   connect: `${BS}/ws`,
   subscribe: (id) => `/topic/messages/${id}`,
   sendTo: (id) => `/app/messages/${id}`
};

// getMessages - gets Array of chatJSON

export { REST, AUCTION, CHAT };
