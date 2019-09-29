import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo";
import { FetchMovies } from "../../graphql/queries/";
import { SectionWrapper, List, Loader, Filters } from "../../components";
import { filterTypes } from "./MovieList.schema";

const MovieList = _ => {
  const [movies, setMovies] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  const { data, loading } = useQuery(FetchMovies, {
    variables: { where: { ...activeFilters } }
  });

  const applyFilters = ({genre, ...filtersToApply}) => {
    const parsedGenres = genre && genre.map(({value}) => value)
    setActiveFilters({...filtersToApply, ...(parsedGenres && {genre: parsedGenres})});

  }

  const clearFilters = () => {
    setActiveFilters({})
  }

  useEffect(() => {
    !loading && setMovies(data.movies || []);
  }, [loading]);

  return (
    <SectionWrapper>
      <Filters filterType={filterTypes} onApplyFilters={applyFilters} onClearFilters={clearFilters}/>
      {loading ? <Loader /> : <List movies={movies} />}
    </SectionWrapper>
  );
};

export default MovieList;
