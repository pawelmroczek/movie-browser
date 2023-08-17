import { ImagePoster, LinkElement, Poster, Rate, StarImage, StyledTile, TileTitle, Votes, Year } from "../../../common/Tile/styled";
import poster from "../../../common/images/poster.png"
import star from "../../../common/images/Vector.svg"
import { Container, Header, Movies, Rating, Tag, Tags, TileContent } from "./styled";
import { Wrapper } from "../../Movie/People/styled";

const MovieCrew = () => {
    return (
        <Wrapper>
            <Header> Movies - crew (4)
                </Header>
            <Container>
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
                            <Tags>
                                <Tag>Action</Tag>
                                <Tag>Adventure</Tag>
                                <Tag>Drama</Tag>
                            </Tags>
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
                            <Tags>
                                <Tag>Action</Tag>
                                <Tag>Adventure</Tag>
                                <Tag>Drama</Tag>
                            </Tags>
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
                            <Tags>
                                <Tag>Action</Tag>
                                <Tag>Adventure</Tag>
                                <Tag>Drama</Tag>
                            </Tags>
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
                            <Tags>
                                <Tag>Action</Tag>
                                <Tag>Adventure</Tag>
                                <Tag>Drama</Tag>
                            </Tags>
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

export default MovieCrew;