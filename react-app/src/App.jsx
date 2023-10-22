import React from "react";
import Welcome from "./Welcome";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Error404Page from "./assets/component/Error404Page.jsx";
import AppOutlet from "./assets/component/AppOutlet.jsx";
import MyRepoList from "./assets/component/MyRepoList.jsx";
import ErrorBoundary from "./assets/component/ErrorBoundary.jsx";
import "./App.css";
import RepoInfo from "./assets/component/MyRepoInfo.jsx";

function App() {
  return (
    <>
      <Welcome />
      <Routes>
        <Route path="/" element={<MyRepoList />} />
        <Route path="/repodetails" element={<AppOutlet />}>
          <Route path=":id" element={<RepoInfo />} />
        </Route>
        <Route path="/errorboundary" element={<ErrorBoundary />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </>
  );
}
export default App;
