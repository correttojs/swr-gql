import typeDefs from "../../server/resolvers/schema.graphql";
import { createServer } from "@graphql-yoga/node";
import { resolvers } from "../../server/resolvers/resolvers";
 

import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

const server = createServer({ 
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

// export const config = {
//   api: {
//     // bodyParser: false,
//     // externalResolver: true,
//   },
// };


// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
  // allowedHeaders: "*"
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("reqqqqqq")
  // Run the middleware
  await runMiddleware(req, res, cors)

  await server.requestListener(req, res)
}
 
