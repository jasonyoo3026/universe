import React, { useEffect } from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { SinglePost, ProtectedRoutes } from "./components";
import { Navbar, Footer, LeftBar, RightBar } from "./Layout";
import { Homepage, SearchPage, SavedPostList } from "./Views";
// import { ProtectedRoutes } from "./components"

const App = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      <Navbar />
      <main className="main-layout">
        <LeftBar />
        <ScrollToTop />
        <Routes>
          <ProtectedRoutes path="/" exact component={Homepage} />
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
