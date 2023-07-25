import React from "react";
import { StyledTile, Image, Tags, Rating, TileContent, Title, Year, Tag, Rate, Votes, StarImage } from "./styled";
import star from "../images/Vector.svg";

export const Tile = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

    return (
        movie ? (
            <StyledTile>
                <Image src={posterUrl} alt=""></Image>
                <TileContent>
                    <Title>{movie.title}</Title>
                    <Year>{movie.relase_date}</Year>
                    <Tags>
                        <Tag></Tag>
                    </Tags>
                    <Rating>
                        <StarImage src={star} alt=""></StarImage>
                        <Rate>{movie.vote_average}</Rate>
                        <Votes>{movie.vote_count} votes</Votes>
                    </Rating>
                </TileContent>
            </StyledTile>
        ) : null
    )
};