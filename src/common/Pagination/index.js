import {
  StyledTags,
  FirstVector,
  PageNumber,
  StyledPagination,
  Tag,
  Number,
  Text,
  SecondVector,
} from "./styled";
import lessThan from "../images/lessThan.svg";
import greaterThan from "../images/greaterThan.svg";
import usePagination from "./usePagination";

export const Pagination = () => {
  const {
    page,
    totalPages,
    pageDecrease,
    pageIncrease,
    setFirstPage,
    setLastPage,
  } = usePagination();

  return (
    <StyledPagination>
      <StyledTags>
        <Tag onClick={setFirstPage} disabled={page === 1}>
          <FirstVector src={lessThan} alt="" />
          <SecondVector src={lessThan} alt="" />
          <Text>First</Text>
        </Tag>
        <Tag onClick={pageDecrease} disabled={page <= 1}>
          <FirstVector src={lessThan} alt="" />
          <Text>Previous</Text>
        </Tag>
      </StyledTags>
      <PageNumber>
        Page <Number>{page}</Number> of <Number>{totalPages}</Number>
      </PageNumber>
      <StyledTags>
        <Tag onClick={pageIncrease} disabled={page >= totalPages}>
          <Text>Next</Text>
          <FirstVector src={greaterThan} alt="" />
        </Tag>
        <Tag onClick={setLastPage} disabled={page === totalPages}>
          <Text>Last</Text>
          <FirstVector src={greaterThan} alt="" />
          <SecondVector src={greaterThan} alt="" />
        </Tag>
      </StyledTags>
    </StyledPagination>
  );
};
