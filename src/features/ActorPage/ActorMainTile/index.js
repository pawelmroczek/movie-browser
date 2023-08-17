import { useEffect } from 'react';
import poster from "../../Movie/img/actorsvg.svg"
import { DateOfBirth, Description, Details, Image, ImageContainer, Name, PlaceOfBirth, TileWrapper, Title } from './styled';
import { useState } from 'react';
const ActorMainTile = () => {
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
        <>
            <TileWrapper>
                <ImageContainer>
                    <Image src={poster} alt=''></Image>
                </ImageContainer>
                <Details>
                    <Title>Liu Yifei</Title>
                    <DateOfBirth>
                        <Name>Birth</Name>
                        25.08.1987
                    </DateOfBirth>
                    <PlaceOfBirth>
                        <Name>Place of birth:</Name>
                        Wuhan, Hubei, China</PlaceOfBirth>
                    {isWideScreen && (
                        <Description>
                            Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.</Description>
                    )}
                </Details>
                {!isWideScreen && (
                    <Description>
                        Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.
                    </Description>
                )}
            </TileWrapper>
        </>
    )
}

export default ActorMainTile;