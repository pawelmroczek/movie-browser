import styled from 'styled-components'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const LinkElement = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.color.black};
`


export const PersonContent = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, 136px);
	grid-gap: 16px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fill, 208px);
		grid-gap: 24px;
	}
`

export const StyledActorTile = styled.article`
	background: ${({ theme }) => theme.color.white};
	box-shadow: 0px 4px 12px 0px #bac7d580;
	border-radius: 5px;
	padding: 8px;
	width: 136px;
	height: 245px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	@media (min-width: 768px) {
		width: 208px;
		min-height: 339px;
		padding: 16px;
		height: unset;
	}
`
export const PersonPicture = styled.div`
	background: ${({ theme }) => theme.color.silver};
	width: 120px;
	height: 178px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;

	@media (min-width: 768px) {
		width: 176px;
		height: 264px;
	}
`

export const PersonPoster = styled.img`
	width: ${({ $isCustom }) => ($isCustom ? '45.45px' : '100%')};
	height: ${({ $isCustom }) => ($isCustom ? '57.67px' : '100%')};
	object-fit: cover;
	border-radius: 5px;
`

export const PersonTitle = styled.header`
	font-weight: 500;
	font-size: 14px;
	text-align: center;
	display: flex;
	flex-grow: 1;
	padding-top: 8px;

	@media (min-width: 768px) {
		font-size: 22px;
		padding-top: 12px;
	}
`
