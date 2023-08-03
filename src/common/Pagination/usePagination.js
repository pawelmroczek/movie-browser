import { useEffect, useState } from "react";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";
import paginationParamName from "../../paginationParamName";
import { useSelector } from "react-redux";
import { selectData } from "../../features/browserSlice";
import { usePrevious } from "../usePrevious";

const usePagination = () => {
  const data = useSelector(selectData);
  const totalPages = data.total_pages;
  const pageFromParam = parseInt(useQueryParameter(paginationParamName));

  const [page, setNewPage] = useState(pageFromParam || 1);

  const pageDecrease = () => {
    setNewPage((page) => page - 1);
  };

  const pageIncrease = () => {
    setNewPage((page) => page + 1);
  };

  const setFirstPage = () => {
    setNewPage((page) => (page = 1));
  };

  const setLastPage = () => {
    setNewPage((page) => (page = totalPages));
  };

  const previosPageValue = usePrevious(page);
  const [initialized, setInitialized] = useState(false);
  const replaceQueryParameter = useReplaceQueryParameter();

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      return;
    }

    if (page < 1 || page > totalPages) {
      setNewPage((page) => (page = 1));
      replaceQueryParameter({ key: paginationParamName, value: undefined });
    }

    if (page !== previosPageValue) {
      if (page !== 1) {
        replaceQueryParameter({ key: paginationParamName, value: page });
      } else {
        replaceQueryParameter({ key: paginationParamName, value: undefined });
      }
    }

    return () => {};
  }, [page, replaceQueryParameter, previosPageValue, initialized, totalPages]);

  return {
    page,
    totalPages,
    pageDecrease,
    pageIncrease,
    setFirstPage,
    setLastPage,
  };
};

export default usePagination;
