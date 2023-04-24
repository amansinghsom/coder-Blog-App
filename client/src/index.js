import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MyContext } from './Context';
const root = ReactDOM.createRoot(document.getElementById('root'));

//set apolloClient 
const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')):{token:""}
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  headers:{
    auth:token.token
  }
});

root.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
);


