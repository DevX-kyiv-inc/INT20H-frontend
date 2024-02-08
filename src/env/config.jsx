const BS = "http://localhost:8080";

const REST = {
   postCreate: `${BS}/api/v2/saveAuction`,
   getAll: (index, closed, filter) =>
      `${BS}/api/v2/allAuctions?index=${index}&closed=${closed}&filter=${filter}`,
   getOne: (id) => `${BS}/api/v2/auction/${id}`
};

const SOCKET = {
   connect: `${BS}/api/websocket/oleg`,
   topic: `yaya ee cocojango`
}


export {REST, SOCKET};
