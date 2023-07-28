import React from "react";
import { StyledTile, Rating, TileContent, TileTitle, Year, Rate, Votes, StarImage, Poster, ImagePoster } from "./styled";
import star from "../images/Vector.svg";
import customPoster from "../images/Video.svg"
import { Genres } from "../Genres";

export const Tile = ({ movie, genres }) => {
    if (!movie) {
        return null;
    }

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
        : customPoster;

    return (
        <StyledTile>
            <Poster>
                <ImagePoster src={posterUrl} alt="" $isCustom={posterUrl === customPoster}></ImagePoster>
            </Poster>
            <TileContent>
                <TileTitle>{movie.title}</TileTitle>
                <Year>{movie.release_date}</Year>
                
                <Genres genre_ids={movie.genre_ids} genres={genres} />
                <Rating>
                    <StarImage src={star} alt=""></StarImage>
                    <Rate>{movie.vote_average === 0 ? 0 : movie.vote_average.toFixed(1)}</Rate>
                    <Votes>{movie.vote_count} votes</Votes>
                </Rating>
            </TileContent>
        </StyledTile>
    )
};
