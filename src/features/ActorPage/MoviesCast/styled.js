import styled from 'styled-components'

export const Wrapper = styled.div`
	margin: 0 15px 20px;
	@media (min-width: 768px) {
		margin: 0 64px 64px;
	}
`
export const Movies = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, 288px);
	grid-gap: 24px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fill, 324px);
	}
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

export const Container = styled.div`
	margin: 0 auto 20px;
	width: 100%;
	max-width: 1368px;

	@media (min-width: 768px) {
		margin: 0 auto 64px;
	}
`
