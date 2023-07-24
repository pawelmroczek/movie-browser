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
                <Image src={lessThan} alt="" />
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
                <ImageGreaterThan src={greaterThan} alt="" />
                Next
            </BlueTag>
            <BlueTag
            to="/last"
            >
                <ImageGreaterThan src={greaterThan} alt="" />
                Last
            </BlueTag>
        </StyledTags>
    </StyledPagination>

);