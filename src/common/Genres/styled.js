import styled from 'styled-components'

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
		height: 36px;
		margin: unset;
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
