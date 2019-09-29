import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo";
import { FetchMovies } from "../../graphql/queries/";
import { SectionWrapper, List, Loader } from "../../components";

const MovieList = _ => {
  const [movies, setMovies] = useState([]);
  const { data, loading } = useQuery(FetchMovies);

  useEffect(() => {
    !loading && setMovies(data.movies || []);
  }, [loading]);

  return (
    <SectionWrapper>
      {loading ? <Loader /> : <List movies={movies} />}
    </SectionWrapper>
  );
};

export default MovieList;
