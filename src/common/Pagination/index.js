import React from "react";
import { StyledTags,  ImageGreaterThan, ImageLessThan, Image, PageNumber, StyledPagination, GrayTag, BlueTag, Number } from "./styled";
import lessThan from "../images/lessThan.svg";
import greaterThan from "../images/greaterThan.svg";


export const Pagination = () => (
    <StyledPagination>
        <StyledTags>
            <GrayTag
            to="/first"
            >
                <ImageLessThan src={lessThan} alt="" />
                First
            </GrayTag>
            <GrayTag
            to="/previous"
            >
                <ImageLessThan src={lessThan} alt="" />
                Previous
            </GrayTag>
        </StyledTags>
        <PageNumber>
                Page <Number>1</Number> of <Number>500</Number>
            </PageNumber>
        <StyledTags>
        <BlueTag
            to="/next"
            >
                Next
                <ImageGreaterThan src={greaterThan} alt="" />
            </BlueTag>
            <BlueTag
            to="/last"
            >
                Last
                <ImageGreaterThan src={greaterThan} alt="" />
            </BlueTag>
        </StyledTags>
    </StyledPagination>

);