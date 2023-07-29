import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const LinkElement = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.color.black};
`

export const StyledTile = styled.article`
	background: ${({ theme }) => theme.color.white};
	box-shadow: 0px 4px 12px 0px #bac7d580;
	border-radius: 5px;
	padding: 16px;
	display: flex;

	@media (min-width: 768px) {
		min-width: 324px;
		height: 650px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
`

export const Poster = styled.div`
	background: ${({ theme }) => theme.color.silver};
	width: 114px;
	height: 169px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		width: 292px;
		min-height: 434px;
	}
`

export const ImagePoster = styled.img`
	width: ${({ $isCustom }) => ($isCustom ? '45px' : '114px')};
	height: ${({ $isCustom }) => ($isCustom ? '45px' : '169px')};
	border-radius: 5px;

	@media (min-width: 768px) {
		width: ${({ $isCustom }) => ($isCustom ? '45px' : '292px')};
		height: ${({ $isCustom }) => ($isCustom ? '45px' : '434px')};
	}
`

export const TileContent = styled.div`
	display: grid;
	padding-left: 16px;
	height: fit-content;

	@media (min-width: 768px) {
		padding: 0;
		height: 100%;
	}
`

export const TileTitle = styled.header`
	font-weight: 500;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	padding: 0 0 4px;

	@media (min-width: 768px) {
		-webkit-line-clamp: 2;
		font-size: 22px;
		padding-top: 16px;
		max-height: 65px;
	}
`

export const Year = styled.div`
	color: ${({ theme }) => theme.color.waterloo};
	position: relative;
	font-size: 13px;
	font-weight: 400;

	@media (min-width: 768px) {
		font-size: 16px;
		top: 8px;
	}
`
export const Tags = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	padding: 0;

	@media (min-width: 768px) {
		font-size: 16px;
	}
`
export const Rating = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: end;
`
export const StarImage = styled.img`
	width: 16px;
	height: 15.25px;

	@media (min-width: 768px) {
		width: 24px;
		height: 22.87px;
	}
`
export const Rate = styled.div`
	font-size: 13px;
	font-weight: 600;
	padding: 0px 7px 0px 8px;

	@media (min-width: 768px) {
		font-size: 16px;
		padding: 0px 12px 0px 12px;
	}
`
export const Votes = styled.div`
	color: ${({ theme }) => theme.color.waterloo};
	font-size: 13px;

	@media (min-width: 768px) {
		font-size: 16px;
	}
`
