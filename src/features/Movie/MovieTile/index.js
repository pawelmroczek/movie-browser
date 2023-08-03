import React, { useState, useEffect } from 'react'
import {
	TileWrapper,
	Details,
	Image,
	Title,
	Year,
	Name,
	Production,
	ImageContainer,
	Genres,
	Genre,
	ImageStar,
	RatingWrapper,
	RatingValue,
	TotalValue,
	VotesQty,
	Description,
} from './styled'
import moviephoto from '../img/poster.png'
import star from '../../../common/images/Vector.svg'

const MovieTile = () => {
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768)

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth > 768)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<TileWrapper>
			<ImageContainer>
				<Image src={moviephoto} alt='movie' />
			</ImageContainer>
			<Details>
				<Title>Mulan</Title>
				<Year>2020</Year>
				<Production>
					<Name>Production:</Name> China, USA
				</Production>
				<Production>
					<Name>Release date:</Name> 24.10.2020
				</Production>
				<Genres>
					<Genre>Action</Genre>
					<Genre>Drama</Genre>
					<Genre>Adventure</Genre>
				</Genres>
				<RatingWrapper>
					<ImageStar src={star} alt='star' />
					<RatingValue>
						7,8<TotalValue>/10</TotalValue>
					</RatingValue>
					<VotesQty>35 votes</VotesQty>
				</RatingWrapper>
				{isWideScreen && (
					<Description>
						A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as
						a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in
						order to save her father.
					</Description>
				)}
			</Details>
			{!isWideScreen && (
				<Description>
					A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a
					male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order
					to save her father.
				</Description>
			)}
		</TileWrapper>
	)
}

export default MovieTile
