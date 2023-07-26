import React from "react";
import { StyledTile, Tags, Rating, TileContent, Title, Year, Tag, Rate, Votes, StarImage, Poster, ImagePoster } from "./styled";
import star from "../images/Vector.svg";
import customPoster from "../images/Video.svg"

export const Tile = ({ movie }) => {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
        : customPoster;
        
    return (
        movie ? (
            <StyledTile>
                <Poster>
                    <ImagePoster src={posterUrl} alt="" isCustom={posterUrl === customPoster}></ImagePoster>
                </Poster>
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