import React from "react";
import { ActorTile } from '../../common/ActorTile'
import { Container, Title} from "../../common/Container";
import { PersonContent } from "../../common/ActorTile/styled";
import { Pagination } from '../../common/Pagination'
import { useQueryParameter } from '../../queryParameters'
import searchQueryParamName from '../../searchQueryParamName'
import { fetchSearchResult, selectPopularPeople, selectStatus } from "../browserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const People = () => {
   const query = useQueryParameter(searchQueryParamName)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchSearchResult(query))
	}, [query, dispatch])

	const status = useSelector(selectStatus)
	const people = useSelector(selectPopularPeople)


    switch (status) {
		case 'loading':
			return (
				<Container>
					<Title>Search results for "{query}"</Title>
				</Container>
			)
		case 'error':
			return <Container>Ooops! Something went wrong...</Container>
		case 'success':
			if (!people.length && query) {
				return (
					<Container>
						<Title>Sorry, there are no results for "{query}"</Title>
					</Container>
				)
			} else if (query) {
				return (
					<>
						<Container>
							<Title>
								Search results for "{query}" ({people.length})
							</Title>
							<PersonContent>
								<ActorTile></ActorTile>
							</PersonContent>
						</Container>
						<Pagination />
					</>
				)
			} else {
				return (
					<>
						<Container>
							<Title>Popular people</Title>
							<PersonContent>
								{people.map(people => (
									<ActorTile key={people.id} people={people} />
								))}
							</PersonContent>
						</Container>
						<Pagination />
					</>
				)
			}
		default:
			return null
	}
}

export default People;


