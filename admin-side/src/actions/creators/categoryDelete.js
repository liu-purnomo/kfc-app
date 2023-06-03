import { urlServer } from "../../utils/urlServer";
import { CATEGORY_DELETE_FAIL, CATEGORY_DELETE_PENDING, CATEGORY_DELETE_SUCCESS } from "../actionType";

const categoryDeletePending = () => ({
    type: CATEGORY_DELETE_PENDING,
})

const categoryDeleteSuccess = (successMessage) => ({
    type: CATEGORY_DELETE_SUCCESS,
    payload: successMessage
})

const categoryDeleteFail = (errorMessage) => ({
    type: CATEGORY_DELETE_FAIL,
    payload: errorMessage
})

export const categoryDelete = (id) => async (dispatch, getState) => {
    try {
        dispatch(categoryDeletePending())
        const response = await fetch(urlServer + '/categories/' + id, {
            method: 'DELETE',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        const responseJson = await response.json()
        if (!response.ok) {
            throw (responseJson)
        } else {
            dispatch(categoryDeleteSuccess(responseJson.message))
        }
    } catch (err) {
        dispatch(categoryDeleteFail(err.message))
    }
}
