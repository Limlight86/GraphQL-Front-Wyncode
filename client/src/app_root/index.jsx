import React from "react";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "../content";
import client from "./client";

const AppRoot = _ => (
  <ApolloProvider client={client}>
    <Router>
      <Content />
    </Router>
  </ApolloProvider>
);

export default AppRoot;
