import React from 'react';
import { Form, SectionWrapper } from '../../components';
import { schema } from './NewMovie.schema';

const NewMovie = _ => (
  <SectionWrapper columnDefs="col-md-6 col-md-offset-3">
    <Form schema={schema} handleSubmit={_ => console.log('submiting new movie form')} />
  </SectionWrapper>
);

export default NewMovie;
