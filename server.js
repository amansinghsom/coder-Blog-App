import { ApolloServer, gql } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import _ from './model/dbConnected.js'
import { JWT_KEY } from './config/index.js';
import jwt from 'jsonwebtoken'
import typeDefs from './schema/index.js'
import resolvers from './resolver/index.js';


const context = ({ req }) => {
  const { auth } = req.headers;
  if (auth) {
    const { userid } = jwt.verify(auth, JWT_KEY)
    return { userid };
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground()
  ],
});



server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


