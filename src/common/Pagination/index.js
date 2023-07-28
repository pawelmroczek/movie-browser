import React from "react";
import { BlueLi, GrayLi, ImageGreaterThan, ImageLessThan, PageNumber, Number, StyledPagination, StyledUl } from "./styled";
import lessThan from "../images/lessThan.svg";
import greaterThan from "../images/greaterThan.svg"

export const Pagination = () => (
    <StyledPagination>
        <StyledUl>
            <GrayLi
                to="/first"
            >
                <ImageLessThan src={lessThan} alt="" />
                First
            </GrayLi>
            <GrayLi
                to="/previous"
            >
                <ImageLessThan src={lessThan} alt="" />
                Previous
            </GrayLi>
            <PageNumber>
                Page <Number>1</Number> of <Number>500</Number>
            </PageNumber>
            <BlueLi
                to="/next"
            >
                Next
                <ImageGreaterThan src={greaterThan} alt="" />

            </BlueLi>
            <BlueLi
                to="/last"
            >
                Last
                <ImageGreaterThan src={greaterThan} alt="" />
            </BlueLi>
        </StyledUl>
    </StyledPagination>

);