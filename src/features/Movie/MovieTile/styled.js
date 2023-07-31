import styled from 'styled-components'

export const TileWrapper = styled.div`
	padding: 16px;
	background-color: ${({ theme }) => theme.color.white};
	max-width: 1288px;
	box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
	margin: 0 auto 21px;
	display: flex;
	flex-wrap: wrap;

	@media (min-width: 992px) {
		padding: 40px;
		margin: 0 auto 64px;
	}
`
