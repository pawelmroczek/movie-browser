import { TileWrapper } from './styled'
import moviephoto from '../img/poster.png'

const MovieTile = () => {
	return (
		<TileWrapper>
			<div>
				<img src={moviephoto} />
			</div>
			<div className='details'>
				<div>Mulan</div>
				<div>2020</div>
				<div>Production: China, United States of America</div>
				<div>Release date: 24.10.2020</div>
				<div>jakieś tam te bloki</div>
				<div>Ocena</div>
			</div>
			<div className='description'>
				A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a
				male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to
				save her father.
			</div>
		</TileWrapper>
	)
}

export default MovieTile
