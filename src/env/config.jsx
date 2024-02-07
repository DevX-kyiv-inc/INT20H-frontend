const BS = "backend.elastic-beam-domination.aws.com";

const REST = {
   postCreate: `${BS}/api/v2/create-auction-product`,
   getAll: (index, closed, filter) =>
      `${BS}/api/v2/auction-products?index=${index}&closed=${closed}true&filter=${filter}`,
   getOne: (id) => `${BS}/api/v2/auction-product?id=${id}`
};

const SOCKET = {
   connect: `${BS}/api/websocket/oleg`,
   topic: `yaya ee cocojango`
}


export {REST, SOCKET};
