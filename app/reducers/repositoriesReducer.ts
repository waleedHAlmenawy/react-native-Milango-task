// src/reducers/repositoriesReducer.ts
import { AnyAction } from "redux";

interface Repository {
  id: number;
  name: string;
  stargazers_count: number;
  language: string;
}

interface RepositoriesState {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
}

const initialState: RepositoriesState = {
  repositories: [],
  loading: false,
  error: null,
};

export const repositoriesReducer = (
  state = initialState,
  action: AnyAction
): RepositoriesState => {
  switch (action.type) {
    case "FETCH_REPOSITORIES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_REPOSITORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        repositories: action.payload,
      };
    case "FETCH_REPOSITORIES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
