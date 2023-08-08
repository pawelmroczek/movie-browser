import poster from '../../Movie/img/actor.png'
import { About, DateOfBirth, ImagePoster, LabelText, PlaceOfBirth, Poster, StyledTileActor, TileContent, TileTitle } from './styled';
const ActorMainTile = () => {
    return (
        <>
            <StyledTileActor>
                <Poster>
                    <ImagePoster src={poster} alt=''></ImagePoster>
                </Poster>
                <TileContent>
                    <TileTitle>Liu Yifei</TileTitle>
                    <DateOfBirth>
                        <LabelText>Date of birth:</LabelText>
                        25.08.1987
                    </DateOfBirth>
                    <PlaceOfBirth>
                        <LabelText>Place of birth:</LabelText>
                         Wuhan, Hubei, China</PlaceOfBirth>
                </TileContent>
                <About>Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</About>
            </StyledTileActor>
        </>
    )
}

export default ActorMainTile;
