import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "./store";

export const fetchRepositories =
  (
    top: number,
    date: string,
    language: string
  ): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch({ type: "FETCH_REPOSITORIES_REQUEST" });

    try {
      let url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc`;
      if (language) {
        url += `+language:${language}`;
      }
      const response = await axios.get(url);
      const repositories = response.data.items.slice(0, top);
      dispatch({ type: "FETCH_REPOSITORIES_SUCCESS", payload: repositories });
    } catch (error: any) {
      dispatch({ type: "FETCH_REPOSITORIES_FAILURE", payload: error.message });
    }
  };
