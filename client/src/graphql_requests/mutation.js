import { gql } from '@apollo/client';

// Mutation

export const Login_TOKEN_Generate = gql`
    # token generate 
    mutation TokenGenerate($userNew:UserInputSigin!){
    signInUser(userNew:$userNew){
        token
    }

}`;


export const SignUpForm = gql`
    mutation SignUpForm($userNew:UserInput!){
    signupUser(userNew:$userNew){
        firstname,
        lastname,
        id,
        email,
        password
    }
  
  }

`
export const createQuotes = gql`
    mutation createQuotesFuc($data:newQuotes!){
        Quote:createQuotes(data:$data)
    }

`