import styled from 'styled-components'

export const TileWrapper = styled.div`
	padding: 16px;
	background-color: ${({ theme }) => theme.color.white};
	max-width: 1368px;
	box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
	margin: 0 auto 21px;
	display: flex;
	flex-wrap: wrap;

	@media (min-width: 768px) {
		padding: 40px;
		margin: 0 auto 64px;
		display: grid;
		grid-template-columns: auto 1fr;
	}
`

export const ImageContainer = styled.div`
	background: ${({ theme }) => theme.color.silver};
	margin: 0 16px 0 0;
	width: 114px;
    height: 169px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;

	@media (min-width: 768px) {
		margin: 0 40px 0 0;
		width: 312px;
    	height: 464px;
	}
	
`

export const Image = styled.img`
	width: ${({ $isCustom }) => ($isCustom ? '45.45px' : '100%')};
	height: ${({ $isCustom }) => ($isCustom ? '57.67px' : '100%')};
	border-radius: 5px;
`

export const Title = styled.span`
	font-size: 16px;
	font-weight: 500;
	margin: 0 0 4px;

	@media (min-width: 768px) {
		font-size: 36px;
		font-weight: 600;
		margin: 0 0 24px;
		word-break: break-word;
		line-height: 1.1;
	}
`

export const Name = styled.span`
	display: none;
	@media (min-width: 768px) {
		display: block;
		color: #74788b;
	}
`

export const Year = styled.span`
	font-size: 13px;
	color: var(--darker-grey, #7e839a);
	margin: 0 0 4px;

	@media (min-width: 768px) {
		color: #000;
		font-size: 22px;
		margin: 0 0 24px;
	}
`

export const Details = styled.div`
	display: grid;
	max-width: 125px;
	height: fit-content;
	line-height: 130%;

	@media (min-width: 768px) {
		max-width: unset;
		gap: 8px;
	}
`

export const Production = styled.div`
	display: flex;
	font-size: 12px;
	margin: 0 0 4px;
	flex-flow: wrap;
	gap: 10px;

	@media (max-width: 767px) {
		flex-flow: row wrap;
		justify-content: flex-start;
		gap: 0;
	}

	@media (min-width: 768px) {
		font-size: 18px;
	}
`


export const Genres = styled.div`
	display: flex;
	gap: 8px;
	font-size: 10px;
	line-height: 110%;
	flex-wrap: wrap;
	margin: 0 0 12px;

	@media (min-width: 768px) {
		gap: 16px;
		margin: 24px 0;
	}
`

export const Genre = styled.span`
	padding: 4px 8px;
	border-radius: 5px;
	background: #e4e6f0;
	height: fit-content;

	@media (min-width: 768px) {
		padding: 8px 16px;
		font-size: 14px;
	}
`

export const RatingWrapper = styled.div`
	display: flex;
	gap: 8px;
`

export const ImageStar = styled.img`
	width: 16px;
	height: 16px;

	@media (min-width: 768px) {
		width: 24px;
		height: 24px;
	}
`

export const RatingValue = styled.div`
	font-size: 13px;
	font-weight: 600;
	position: relative;
	top: 5px;

	@media (min-width: 768px) {
		font-size: 22px;
		font-weight: 500;
		display: flex;
	}
`

export const TotalValue = styled.span`
	display: none;

	@media (min-width: 768px) {
		font-size: 14px;
		margin: 0 0 0 4px;
		display: flex;
		gap: 12px;
	}
`

export const VotesQty = styled.span`
	font-size: 13px;
	color: var(--darker-grey, #7e839a);

	@media (min-width: 768px) {
		font-size: 14px;
		color: #000;
	}
`

export const Description = styled.div`
	font-size: 14px;
	line-height: 160%;
	margin: 16px 0 0;

	@media (min-width: 768px) {
		font-size: 20px;
		margin: 24px 0 0;
	}
`
