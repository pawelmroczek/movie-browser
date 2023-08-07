import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useDelete, useQueryParameter } from "../../../queryParameters";
import { useEffect, useState } from "react";
import searchQueryParamName from "../../../searchQueryParamName";
import paginationParamName from "../../../paginationParamName";

export const useSearchInput = () => {
  const location = useLocation();
  const isMoviesPage = location.pathname === "/movies";

  const deleteParam = useDelete(paginationParamName, searchQueryParamName);

  const [newInputValue, setNewInputValue] = useState(
    useQueryParameter(searchQueryParamName) || ""
  );

  const onInputChange = (target) => {
    if (target.value === " ") {
      setNewInputValue("");
    } else {
      setNewInputValue(target.value);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      deleteParam({
        key: searchQueryParamName,
        value: newInputValue.trim() !== "" ? newInputValue : null,
      });
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [newInputValue, deleteParam]);

  return {
    newInputValue,
    onInputChange,
    isMoviesPage,
    setNewInputValue,
    deleteParam,
  };
};
