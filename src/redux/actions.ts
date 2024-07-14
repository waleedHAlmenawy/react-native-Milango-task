export const FETCH_REPOSITORIES_REQUEST = 'FETCH_REPOSITORIES_REQUEST';
export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS';
export const FETCH_REPOSITORIES_FAILURE = 'FETCH_REPOSITORIES_FAILURE';

interface FetchRepositoriesRequest {
  type: typeof FETCH_REPOSITORIES_REQUEST;
}

interface FetchRepositoriesSuccess {
  type: typeof FETCH_REPOSITORIES_SUCCESS;
  payload: Repository[];
}

interface FetchRepositoriesFailure {
  type: typeof FETCH_REPOSITORIES_FAILURE;
  error: string;
}

export type RepositoryActionTypes =
  | FetchRepositoriesRequest
  | FetchRepositoriesSuccess
  | FetchRepositoriesFailure;

export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
}

export const fetchRepositories = (
  top?: number,
  date?: string,
  language?: string,
) => {
  return async (dispatch: any) => {
    dispatch({type: FETCH_REPOSITORIES_REQUEST});
    try {
      let url = `https://api.github.com/search/repositories?q=created:>${
        date ? date : '2019-01-10'
      }&sort=stars&order=desc`;

      if (language) {
        url += `+language:${language}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      const repositories = data.items && data.items.slice(0, top ? top : 10);
      dispatch({type: FETCH_REPOSITORIES_SUCCESS, payload: repositories});
    } catch (error: any) {
      dispatch({type: FETCH_REPOSITORIES_FAILURE, error: error.message});
    }
  };
};
