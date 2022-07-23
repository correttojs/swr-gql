import typeDefs from "../../server/resolvers/schema.graphql";
import { createServer } from "@graphql-yoga/node";
import { resolvers } from "../../server/resolvers/resolvers";
 


const server = createServer({
  cors: false,
  graphiql:
    process.env.NODE_ENV !== "production"
      ? {
          defaultQuery: /* GraphQL */ `
            query {
              hello
            }
          `,
        }
      : false,
  endpoint: "/api/graphql",
  schema: {
    typeDefs,
    resolvers,
  },
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
  cors: {
    origin: '*',
    credentials: true,
    allowedHeaders: ['X-Custom-Header'],
    methods: ['POST'],
  },
};

export default server.requestListener;
