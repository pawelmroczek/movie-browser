import React from "react";
import { ActorTile } from "../../common/ActorTile";
import { Container, Title } from "../../common/Container";
import { PersonContent } from "../../common/ActorTile/styled";
import { Pagination } from "../../common/Pagination";
import { useQueryParameter } from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import {
  fetchPopular,
  fetchSearchResult,
  selectData,
  selectStatus,
} from "../browserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import paginationParamName from "../../paginationParamName";
import Loader from "../States/Loader";
import NoResults from "../States/NoResults";
import Error from "../States/Error";

export const People = () => {
  const query = useQueryParameter(searchQueryParamName);
  const page = useQueryParameter(paginationParamName);
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = {
      query: query,
      page: page || 1,
      destination: "person",
    };
    if (!query) {
      dispatch(fetchPopular(payload));
    } else {
      dispatch(fetchSearchResult(payload));
    }
  }, [page, dispatch, query]);

  useEffect(() => {
    dispatch(fetchSearchResult(query));

    const url = window.location.href.split('?')[0];
    window.history.replaceState({}, document.title, url);
  }, [query, dispatch]);

  const data = useSelector(selectData);
  const status = useSelector(selectStatus);
  const people = data.results || [];
  const totalResults = data.total_results;

  switch (status) {
    case "loading":
      return query ? (
        <Container>
          <Title>Search results for "{query}"</Title>
          <Loader />
        </Container>
      ) : (
        <Container>
          <Loader />
        </Container>
      );
    case "error":
      return (
        <Container>
          <Error />
        </Container>
      );
    case "success":
      if (!people.length && query) {
        return (
          <Container>
            <Title>Sorry, there are no results for "{query}"</Title>
            <NoResults />
          </Container>
        );
      } else if (query) {
        return (
          <>
            <Container>
              <Title>
                Search results for "{query}" ({totalResults})
              </Title>
              <PersonContent>
                {people.map((person) => (
                  <ActorTile key={person.id} people={person} />
                ))}
              </PersonContent>
            </Container>
            <Pagination />
          </>
        );
      } else {
        return (
          <>
            <Container>
              <Title>Popular people</Title>
              <PersonContent>
                {people.map((people) => (
                  <ActorTile key={people.id} people={people} />
                ))}
              </PersonContent>
            </Container>
            <Pagination />
          </>
        );
      }
    default:
      return null;
  }
};

export default People;
