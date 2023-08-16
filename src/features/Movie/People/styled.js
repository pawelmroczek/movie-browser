import styled from 'styled-components'

export const Wrapper = styled.div`
	margin: 0 15px 20px;
	@media (min-width: 768px) {
		margin: 0 64px 64px;
	}
`

export const PersonPosterWrapper = styled.div`
	height: 178px;
	background: ${({ theme }) => theme.color.silver};
`

export const StyledActorTile = styled.article`
	padding: 8px;
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);

	@media (min-width: 768px) {
		padding: 16px;
	}
`

export const PersonPoster = styled.img`
	width: ${({ $isCustom }) => ($isCustom ? '45.45px' : '100%')};
	height: ${({ $isCustom }) => ($isCustom ? '57.67px' : '100%')};
	background: ${({ theme }) => theme.color.silver};
	width: 120px;
	max-height: 178px;
	border-radius: 5px;

	@media (min-width: 768px) {
		width: 177px;
		max-height: 264px;
	}
`

export const PersonTitle = styled.header`
	color: var(--black, #18181b);
	text-align: center;
	font-size: 14px;
	font-weight: 500;
	line-height: 130%;
	padding: 8px 0;
`

export const Character = styled.span`
	color: var(--darker-grey, #7e839a);
	text-align: center;
	font-size: 13px;
	font-weight: 400;
	line-height: 130%;
	width: 100%;
	display: block;
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

export const Actors = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(auto-fill, 136px);
	grid-gap: 24px;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fill, 208px);
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
