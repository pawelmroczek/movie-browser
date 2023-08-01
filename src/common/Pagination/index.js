import React from "react";
import { StyledTags, FirstVector, PageNumber, StyledPagination, GrayTag, BlueTag, Number, Text, SecondVector } from "./styled";
import lessThan from "../images/lessThan.svg";
import greaterThan from "../images/greaterThan.svg";


export const Pagination = () => (
    <StyledPagination>
        <StyledTags>
            <GrayTag
                to="/first"
            >
                <FirstVector src={lessThan} alt="" />
                <SecondVector src={lessThan} alt="" />
                <Text>First</Text>
            </GrayTag>
            <GrayTag
                to="/previous"
            >
                <FirstVector src={lessThan} alt="" />
                <Text>Previous</Text>
            </GrayTag>
        </StyledTags>
        <PageNumber>
            Page <Number>1</Number> of <Number>500</Number>
        </PageNumber>
        <StyledTags>
            <BlueTag
                to="/next"
            >
                <Text>Next</Text>
                <FirstVector src={greaterThan} alt="" />
            </BlueTag>
            <BlueTag
                to="/last"
            >
                <Text>Last</Text>
                <FirstVector src={greaterThan} alt="" />
                <SecondVector src={greaterThan} alt="" />
            </BlueTag>
        </StyledTags>
    </StyledPagination>
);