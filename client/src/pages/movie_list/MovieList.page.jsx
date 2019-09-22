import React from 'react';
import { SectionWrapper, EmptyContent } from '../../components';

const MovieList = _ => (
  <SectionWrapper>
    <EmptyContent text="There are no movies to show" subText=" please adjust your filter or create a new one!" />
  </SectionWrapper>
);

export default MovieList;
