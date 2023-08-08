import { Genres } from "../../../common/Genres";
import { Tile } from "../../../common/Tile";
import { ImagePoster, LinkElement, Poster, Rate, Rating, StarImage, StyledTile, TileContent, TileTitle, Votes, Year } from "../../../common/Tile/styled";
import poster from "../../../common/images/poster.png"
import star from "../../../common/images/Vector.svg"
import { Container, Movies } from "./styled";
import { Header, Wrapper } from "../../Movie/People/styled";

const MovieCast = () => {

    return (
        <Wrapper>
            <Container>
                <Header> Movies - cast
                </Header>
                <Movies>
                        <StyledTile>
                            <Poster>
                                <ImagePoster src={poster} alt=''></ImagePoster>
                            </Poster>
                            <TileContent>
                                <LinkElement>
                                    <TileTitle>Mulan</TileTitle>
                                </LinkElement>
                                <Year>Mulan (2020)</Year>
                                <Rating>
                                    <StarImage src={star} alt=''></StarImage>
                                    <Rate>7,8</Rate>
                                    <Votes> 35 votes</Votes>
                                </Rating>
                            </TileContent>
                        </StyledTile>
                </Movies>
                <Movies>
                        <StyledTile>
                            <Poster>
                                <ImagePoster src={poster} alt=''></ImagePoster>
                            </Poster>
                            <TileContent>
                                <LinkElement>
                                    <TileTitle>Mulan</TileTitle>
                                </LinkElement>
                                <Year>Mulan (2020)</Year>
                                <Rating>
                                    <StarImage src={star} alt=''></StarImage>
                                    <Rate>7,8</Rate>
                                    <Votes> 35 votes</Votes>
                                </Rating>
                            </TileContent>
                        </StyledTile>
                </Movies>
            </Container>
        </Wrapper>
    )
}

export default MovieCast;
