import React from 'react';
import { SectionWrapper } from '../../components';

const Home = _ => (
  <SectionWrapper className="text-xs-center">
    <h1 className="display-3">React Graphql Tutorial</h1>
    <p className="lead">
      Check out each route for different examples! Or in a hurry? Just press the button to get a random movie
    </p>
    <button className="btn btn-info-outline btn-lg m-t-1">Randomize Movie</button>
  </SectionWrapper>
);

export default Home;
