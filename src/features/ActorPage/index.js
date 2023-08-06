import { Content } from "../Movie/styled";
import People from "../People";
import ActorMainTile from "./ActorMainTile";
import MovieCrew from "./MoviesCast";
import MovieCast from "./MoviesCrew";

const ActorPage = () => {
    return (
        <>
            <Content>
                <ActorMainTile />
            </Content>
            <MovieCast title="Movie - cast"/>
            <MovieCrew />
            <People/>
        </>
    )
}

export default ActorPage;
