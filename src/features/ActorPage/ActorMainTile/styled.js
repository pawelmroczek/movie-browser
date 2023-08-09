import styled from 'styled-components'
import { StyledTile } from '../../../common/Tile/styled'

export const StyledTileActor = styled(StyledTile)`
    font-size: 14px;
    padding: 16px;
	background-color: ${({ theme }) => theme.color.white};
	max-width: 1368px;
	box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
	margin: 23px 0 24px 0;
	display: flex;
	flex-wrap: wrap;
    font-weight: 500;
    overflow-wrap: break-word;

	@media (min-width: 768px) {
        padding: 40px;
	}
    `
export const Poster = styled.div`
       
    `
export const ImagePoster = styled.img`
    border-radius: 5px;
    height: 163px;
    width: 116px;
    margin: 0 16px 16px 0;

    @media (min-width: 768px) {
		height: 564px;
        width: 399px;
	}
`
export const TileContent = styled.article`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
export const TileTitle = styled.header`
    margin: 4px 0 16px 0;

    @media (min-width: 768px) {
		font-size: 36px;
	}
 `

export const LabelText = styled.div`
    color: ${({ theme }) => theme.color.silver};
`
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
export const About= styled.div`
font-size: 14px;
	line-height: 160%;
	margin: 16px 0 0;

	@media (min-width: 768px) {
		max-width: 849px;
        font-size: 20px;
        overflow-wrap: break-word;
	}
`
