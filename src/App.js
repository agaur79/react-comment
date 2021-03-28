import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import { CommentList } from './features/comment/CommentList';
import { Home } from './features/comment/Home';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/comment">
            <CommentList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
