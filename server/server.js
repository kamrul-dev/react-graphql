import {ApolloServer} from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone"


const users = [
    
]


const typeDefs = `
 type Query {
   getUsers: [User]
   getUserById(id: ID!): User
 }

   type Mutation {
   createUser(name: String!, email: String!, age: Int!, isMarried: Boolean!): User
 }

type User {
   id: ID
   name: String
   email: String
   age: Int
   isMarried: Boolean
}

`;

const resolvers = {

};

const server = new ApolloServer({typeDefs, resolvers});


const { url } = await startStandaloneServer(server,{
    listen: {port:4000}
})
console.log(`server running at: ${url}`)


///// Query, Mutation
//// typeDefs, resolvers



















