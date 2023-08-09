import styled from 'styled-components'

export const Container = styled.div`
	margin: 0 auto 20px;
	width: 100%;
	max-width: 1368px;

	@media (min-width: 768px) {
		margin: 0 auto 64px;
	}
`

export const TileContent= styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 16px;

	@media (min-width: 768px) {
		
	}
`

export const Wrapper = styled.div`
	margin: 0 15px 20px;
	@media (min-width: 768px) {
		margin: 0 64px 64px;
	}
`
export const Movies = styled.div`
	margin-bottom: 16px;
`
export const Rating = styled.div`
display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: end;
	margin-top: 8px;
`

export const Header = styled.span`
	font-size: 20px;
	font-weight: 600;
	line-height: 120%;
	padding: 0 0 12px;
	display: block;

	@media (min-width: 768px) {
		font-size: 36px;
	}
`

