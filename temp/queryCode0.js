const typeDefs = gql`
   type Query{
       greet:String,
       greet1:String,

   }
`;


const resolvers = {
    Query:{
        greet:()=>{
            return "Hello world"
        },
        greet1:()=>{
            return "Hello world1"
        }
    }
}




// Querys 
// query varaible 
/*
query getQuery($userid:ID!){
	getUser(id:$userid){
		firstname,
  	lastname,
  	email,
    quotes{
			by,
      name
    }}}

    

Variable

{
  "userid": "23131"
}
*/