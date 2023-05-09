import React from "react";
import { Routes, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { SinglePost } from "./components";
import { Navbar, Footer, LeftBar, RightBar } from "./Layout";
import { PostFeed, SearchPage, SavedPostList } from "./Views";
import ProtectedRoutes from "./Auth/protectedRoutes";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="main-layout">
        <LeftBar />
        <Routes>
          <ProtectedRoutes path="/" exact component={PostFeed} />
          <ProtectedRoutes exact path={`/posts/:postId`} component={SinglePost} />
          <Route exact path="/search" component={SearchPage} />
          <ProtectedRoutes exact path={`/SavedPostList`} component={SavedPostList} />
        </Routes>
        <Footer />
        <RightBar />
      </main>
    </>
  );
};

export default App;
