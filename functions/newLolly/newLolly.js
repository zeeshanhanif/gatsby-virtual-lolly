const { ApolloServer, gql } = require('apollo-server-lambda')

const faunadb = require("faunadb");
const q = faunadb.query;
const shortid = require("shortid");

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Lolly {
    recipientName: String!
    message: String!
    senderName: String!
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly (recipientName: String!, message: String!,senderName: String!, flavourTop: String!,flavourMiddle: String!,flavourBottom: String!) : Lolly
  }
`


const resolvers = {
  Query: {
    hello: () => {
      return 'Hello, Lolly!'
    },
  },
  Mutation : {
    createLolly: async (_, args) => {

        console.log("args = ",args);
      
      const client = new faunadb.Client({secret: "fnAD48mt89ACAUrFzlu-T5O1vMUmBYU8_KLyFEcV"});
      const id = shortid.generate();
      args.lollyPath = id

      const result = await client.query(
        q.Create(q.Collection("lollies"), {
          data: args
        })
      );
        
      console.log('result', result);
      console.log('result', result.data);
      return result.data
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

exports.handler = server.createHandler()
