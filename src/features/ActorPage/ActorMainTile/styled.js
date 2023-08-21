import styled from 'styled-components'

export const DateOfBirth = styled.div`
    font-size: 12px;
    @media (min-width: 768px) {
		font-size: 18px;
        display: flex;
        flex-wrap: nowrap;
	}
`
export const PlaceOfBirth= styled.div`
    font-size: 12px;
    margin-top: 8px;
    @media (min-width: 768px) {
		font-size: 18px;
        display: flex;
        flex-wrap: nowrap;
	}
`

export const TileWrapper = styled.div`
	padding: 16px;
	background-color: ${({ theme }) => theme.color.white};
	max-width: 1368px;
	box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
	margin: 0 auto 21px;
	display: flex;
	flex-wrap: wrap;

	@media (min-width: 992px) {
		padding: 40px;
		margin: 0 auto 64px;
		display: grid;
		grid-template-columns: auto 1fr;
	}
`

export const ImageContainer = styled.div`
	margin: 0 16px 0 0;
    width: 116px;
    height: 163px;

	@media (min-width: 768px) {
		margin: 0 40px 0px 0;
        width: 116px;
    	height: 163px;
	}

    @media (min-width: 992px) {
		width: 399px;
        height: 564px;
	}
`

export const Image = styled.img`
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Title = styled.span`
	font-size: 16px;
	font-weight: 500;
	margin: 0 0 4px;

	@media (min-width: 768px) {
		font-size: 36px;
		font-weight: 600;
		margin: 0 0 24px;
	}
`

export const Name = styled.span`
	color: #74788b;
	margin-right: 4px;

	@media (min-width: 768px) {
		display: block;
		margin-right: 10px;
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
		margin-top: 16px;
	}
`

export const Production = styled.div`
	display: flex;
	font-size: 12px;
	gap: 10px;
	margin: 0 0 4px;

	@media (min-width: 768px) {
		font-size: 18px;
	}
`

export const Description = styled.div`
	font-size: 14px;
	line-height: 160%;
	margin: 16px 0 0;
	text-align: justify;
  	text-justify: inter-word;


	@media (min-width: 768px) {
		font-size: 20px;
		margin: 24px 0 0;
	}
`