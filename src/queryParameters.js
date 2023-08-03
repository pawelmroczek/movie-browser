import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  return query;
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return useCallback(({ key, value }) => { // Dodaj useCallback
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined) {
        searchParams.delete(key);
    } else {
        searchParams.set(key, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
}, [history, location]);
};
