import gql from "graphql-tag";

export const FetchMovies = gql`
  query FetchMovies {
    movies {
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

export const FetchMovie = gql`
  query FetchMovie($_id: String!) {
    movie(_id: $_id) {
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
