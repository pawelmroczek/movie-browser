import React from "react";
import { Tag, Tags } from "./styled";

export const Genres = ({ genre_ids, genres }) => {
    const movieGenres = genres.filter(genre => genre_ids.includes(genre.id));

    return (
        <Tags>
            {movieGenres.slice(0, 2).map((genre) => (
                <Tag key={genre.id}>{genre.name}</Tag>
            ))}
        </Tags>
    );
};
