import React from 'react';
import { SectionWrapper, EmptyContent } from '../../components';

const SearchMovie = _ => (
  <SectionWrapper>
    <EmptyContent text="Search for your favorite movie!" subText="If it doesn't exist, you can add it!" />
  </SectionWrapper>
);

export default SearchMovie;
