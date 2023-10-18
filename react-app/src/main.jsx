import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import RepoDetails from "./assets/component/MyRepoInfo.jsx";
import Error404Page from "./assets/component/Error404Page.jsx";
import AppOutlet from "./assets/component/AppOutlet.jsx";
import MyRepoList from "./assets/component/MyRepoList.jsx";
import ErrorBoundary from "./assets/component/ErrorBoundary.jsx";
import "./App.css";
import ErrorInstance from "./assets/component/ErrorInstance.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ErrorBoundary>
            <MyRepoList />
          </ErrorBoundary>
        }
        errorElement={<Error404Page />}
      />
      <Route path="/repodetails" element={<AppOutlet />}>
        <Route path=":id" element={<RepoDetails />} />
      </Route>
      <Route path="/errorinstance" element={<ErrorInstance />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    <RouterProvider router={router} />
  </React.StrictMode>
);
