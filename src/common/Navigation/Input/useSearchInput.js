import { useLocation } from "react-router-dom/cjs/react-router-dom";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../../queryParameters";
import { useEffect, useState } from "react";
import searchQueryParamName from "../../../searchQueryParamName";
import { usePrevious } from "./usePrevious";

export const useSearchInput = () => {
  const location = useLocation();
  const isMoviesPage = location.pathname === "/movies";
  const replaceQueryParameter = useReplaceQueryParameter();

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

  const previousInputValue = usePrevious(newInputValue);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      return;
    }

    const timeoutId = setTimeout(() => {
      if (newInputValue !== previousInputValue) {
        replaceQueryParameter({
          key: searchQueryParamName,
          value: newInputValue.trim() !== "" ? newInputValue : undefined,
        });
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [newInputValue, previousInputValue, replaceQueryParameter, initialized]);

  return { newInputValue, onInputChange, isMoviesPage };
};
