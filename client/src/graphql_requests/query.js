import {  gql } from '@apollo/client';

// Query 
export const GET_Qoutes  = gql`
    query getQuetes{
        quotes{
        title
        text
        by {
                firstname
            
            }
        }
        
    }

`


// Get profile data 

export const Profile_Data = gql`
query {
    userData{
          firstname
      lastname
      email
    }
  }



`