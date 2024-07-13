export const FETCH_REPOSITORIES_REQUEST = 'FETCH_REPOSITORIES_REQUEST';
export const FETCH_REPOSITORIES_SUCCESS = 'FETCH_REPOSITORIES_SUCCESS';
export const FETCH_REPOSITORIES_FAILURE = 'FETCH_REPOSITORIES_FAILURE';

function today() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}


export const fetchRepositories = (top, date, language) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_REPOSITORIES_REQUEST });
        try {
            let url = `https://api.github.com/search/repositories?q=created:>${date ? date : "2019-01-10"}&sort=stars&order=desc`;

            if (language) {
                url += `+language:${language}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            const repositories = data.items && data.items.slice(0, top ? top : 10);
            dispatch({ type: FETCH_REPOSITORIES_SUCCESS, payload: repositories });
        } catch (error) {
            dispatch({ type: FETCH_REPOSITORIES_FAILURE, error });
        }
    };
};
