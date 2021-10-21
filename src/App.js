import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import MovieList from "./components/MovieList";
import Register from "./components/Register";
import Summary from "./components/Summary";
function App() {
  const Page = (props) => {
    useEffect(() => {
      document.title = props.title;
    }, []);
    return props.children;
  };
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <Page title="Movie List">
              <MovieList {...props} />
            </Page>
          )}></Route>
        <Route
          exact
          path={"/summary/:id"}
          render={(props) => (
            <Page title="Summary">
              <Summary {...props} />
            </Page>
          )}
        />
        <Route path={"/register/:id"}>
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
