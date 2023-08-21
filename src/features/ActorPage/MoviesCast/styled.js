import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Container = styled.div`
	max-width: 1408px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`
export const Movies = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 16px;
	justify-content: center;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fill, 324px);
		grid-gap: 24px;
	}
`
export const Header = styled.span`
	font-size: 20px;
	font-weight: 600;
	display: block;
	margin-bottom: 16px;

	@media (min-width: 768px) {
		font-size: 36px;
		margin-bottom: 24px;
	}
`
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
		height: 650px;
		flex-direction: column;
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
	width: ${({ $isCustom }) => ($isCustom ? '37px' : '114px')};
	height: ${({ $isCustom }) => ($isCustom ? '27.78px' : '169px')};
	border-radius: 5px;
	margin-top: 4px;

	@media (min-width: 768px) {
		width: ${({ $isCustom }) => ($isCustom ? '45px' : '292px')};
		height: ${({ $isCustom }) => ($isCustom ? '45px' : '434px')};
	}
`

export const Description = styled.div`
	height: auto;
`

export const TileContent = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 16px;

	@media (min-width: 768px) {
    padding: 0;
	min-height: 184px;
	margin: 0;
  }
`
export const TileTitle = styled.header`
	font-weight: 500;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	@media (min-width: 768px) {
		font-size: 22px;
		padding-top: 16px;
        max-height: 68px;
	}
`

export const Year = styled.div`
	color: ${({ theme }) => theme.color.waterloo};
	position: relative;
	font-size: 13px;
	font-weight: 400;
    padding-top: 4px;

	@media (min-width: 768px) {
		font-size: 16px;
		padding: 8px 0 8px 0;
	}
`

export const Rating = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  margin-top: auto;

  @media (min-width: 768px) {
    height: 100%;
  }
`;

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
export const Tags = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
    margin: 12px 0 12px 0;
	padding: 0;
	max-height: 55px;
	overflow: hidden;

	@media (min-width: 768px) {
		font-size: 16px;
		min-height: 36px;
		margin: 8px 0 0 0;
	}
`
export const Tag = styled.li`
	background: ${({ theme }) => theme.color.mystic};
	font-size: 10px;
	border-radius: 5px;
	padding: 4px 8px;
	margin-right: 8px;
    margin-bottom: 8px;
	display: flex;
	align-items: center;

	@media (min-width: 768px) {
		font-size: 14px;
		padding: 8px 16px;
	}
`