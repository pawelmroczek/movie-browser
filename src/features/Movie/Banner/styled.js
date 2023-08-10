import styled from 'styled-components'
import pleksaImage from '../img/Pleksa.png'

export const ImageContainer = styled.div`
	position: relative;
	margin: 0 0 16px;

	@media (min-width: 768px) {
		margin: 0 0 64px;
	}
`

export const MovieImageWrapper = styled.div`
	position: relative;
	max-width: 1920px;
`

export const Pleksa = styled.div`
	background-image: url(${pleksaImage});
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	background-position-x: center;
	background-position-y: center;
	background-size: cover;
`

export const MovieImage = styled.img`
	display: block;
	width: 100%;
	max-height: 770px;
	margin: 0 auto;
	max-width: 1368px;
`

export const StarImage = styled.img`
	width: 16px;
	height: 16px;

	@media (min-width: 992px) {
		width: 40px;
		height: 40px;
	}
`

export const Title = styled.div`
	font-size: 24px;
	font-weight: 600;
	line-height: 120%;

	@media (min-width: 992px) {
		font-size: 44px;
	}

	@media (min-width: 1200px) {
		font-size: 64px;
	}
`

export const Header = styled.div`
	position: absolute;
	bottom: 10px;
	margin: 0 16px;
	color: white;

	@media (min-width: 992px) {
		bottom: 56px;
		margin: 0 150px;
	}

	@media (min-width: 1200px) {
		margin: 0 200px;
	}

	@media (min-width: 1600px) {
		margin: 0 276px;
	}
`
export const Rating = styled.div`
	display: flex;
	max-width: 130px;
	flex-wrap: wrap;
	gap: 8px;

	@media (min-width: 992px) {
		margin: 24.5px 0 0;
	}
`

export const RatingValues = styled.div`
	display: flex;
	gap: 5px;
	align-items: end;
`

export const RatingValue = styled.span`
	font-size: 14px;
	font-weight: 600;

	@media (min-width: 992px) {
		font-size: 30px;
	}
`

export const RatingTotal = styled.span`
	font-size: 10px;

	@media (min-width: 992px) {
		font-size: 16px;
		padding: 0 0 4px;
	}
`

export const RatingQty = styled.span`
	font-size: 10px;
	display: flex;
	align-items: end;

	@media (min-width: 992px) {
		margin: 8px 0 0;
		font-size: 16px;
	}
`
