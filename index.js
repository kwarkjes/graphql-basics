import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadTypedefs } from '@graphql-tools/load';
import resolvers from "./resolvers.js";

const sources = await loadTypedefs(`./typeDefs/**/*.graphql`, {
  loaders: [new GraphQLFileLoader()],
});

const typeDefs = sources.map((source) => source.document);
const schema = buildSubgraphSchema({ typeDefs, resolvers });

const server = new ApolloServer({ 
  schema
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
