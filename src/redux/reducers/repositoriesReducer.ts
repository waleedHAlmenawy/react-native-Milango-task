import {
  FETCH_REPOSITORIES_REQUEST,
  FETCH_REPOSITORIES_SUCCESS,
  FETCH_REPOSITORIES_FAILURE,
  RepositoryActionTypes,
  Repository,
} from '../actions';

interface RepositoriesState {
  loading: boolean;
  repositories: Repository[];
  error: string | null;
}

const initialState: RepositoriesState = {
  loading: false,
  repositories: [],
  error: null,
};

export const repositoriesReducer = (
  state = initialState,
  action: RepositoryActionTypes,
): RepositoriesState => {
  switch (action.type) {
    case FETCH_REPOSITORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        repositories: action.payload,
      };
    case FETCH_REPOSITORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
