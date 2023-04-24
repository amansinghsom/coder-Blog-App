import {ApolloServer,gql} from 'apollo-server'

const typeDefs = gql`
    type Query{
        users:[User]
        quotes:[Quote]
        getUser(id:ID!):User
        userData:User1
    }
    
    type User1{
        firstname:String
        lastname:String
        email:String
    
    }

    type User{
        id:ID!
        firstname:String
        lastname:String
        email:String
        password:String
        quotes:[Quote]
    }

    type Quote{
        title:String
        text:String
        by:subdata
    }
    type subdata{
        id:ID
        firstname:String!
    }
    type Token{
        token:String
    }

    input UserInputSigin{
        email:String!
        password:String!
    }

    type Mutation{
        signupUser(userNew:UserInput!):User
        signInUser(userNew:UserInputSigin!):Token
        createQuotes(data:newQuotes!):String
    }

    input newQuotes{
        title:String!
        text:String!
    }

    input UserInput{
        firstname:String!
        lastname:String!
        email:String!
        password:String!
    }


`
export default typeDefs;