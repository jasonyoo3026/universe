import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { SinglePost } from "./components";
import { Navbar, Footer, LeftBar, RightBar } from "./Layout";
import { PostFeed, SearchPage, SavedPostList } from "./Views";
import Signup from "./Views/Signup";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <main className="main-layout">
        <LeftBar />
          <Routes>
            <Route path="/" element={<PostFeed />} />
            <Route path="/posts/:postId" element={<SinglePost />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/SavedPostList" element={<SavedPostList />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        <Footer />
        <RightBar />
      </main>
    </ApolloProvider>
  );
};

export default App;
