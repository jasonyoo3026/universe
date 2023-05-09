import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.render(
//   <Auth0Provider
//     domain="dev-ei05ldnqlknfegzu.us.auth0.com"
//     clientId="pdnOWwRb6QhINROIEtZJvfc4IHDncxSk"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById("root")
// );
