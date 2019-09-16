export const GET_ALL_REPORTS_BEGIN = "GET_ALL_REPORTS_BEGIN";
export const GET_ALL_REPORTS_SUCCESS = "GET_ALL_REPORTS_SUCCESS";
export const GET_ALL_REPORTS_FAILURE = "GET_ALL_REPORTS_FAILURE";
const api = 'http://localhost:3000';

export const getAllReports_Begin = () => ({
    type: GET_ALL_REPORTS_BEGIN
});

export const getAllReports_Success = reports => ({
    type: GET_ALL_REPORTS_SUCCESS,
    payload: {reports}
});

export const getAllReports_Failure = error => ({
    type: GET_ALL_REPORTS_FAILURE, 
    payload: {error}
});

export function getAllReports() {
    return dispatch => {
        dispatch(getAllReports_Begin());
        return fetch(api + '/reports/')
            .then(response => response.json())
            .then((result) => {
                dispatch(getAllReports_Success(result));
                return result;
            })
            .catch(error => {
                dispatch(getAllReports_Failure(error));
            });
    }
}

