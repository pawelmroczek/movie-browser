import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  return query;
};

export const useReplacePageParameter = (test) => {
  const location = useLocation();
  const history = useHistory();

  const query = parseInt(useQueryParameter(test));
  let check = query;
  if (isNaN(query)) {
    check = null;
  }
  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);
    if (value === null) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    if (check !== value) {
      history.push(`${location.pathname}?${searchParams.toString()}`);
    }
  };
};

export const useDelete = (toDelete, test) => {
  const location = useLocation();
  const history = useHistory();
  const query = useQueryParameter(test);
  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);
    if (value === null) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    searchParams.delete(toDelete);
    if (query !== value) {
      history.push(`${location.pathname}?${searchParams.toString()}`);
    }
  };
};
