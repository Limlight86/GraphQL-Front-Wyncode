import gql from "graphql-tag";

export const CreateMovie = gql`
  mutation createMovie($input: NewMovieInput!) {
    createMovie(input: $input) {
      _id
      title
      year
      director
      duration
      genre
      rate
    }
  }
`;
