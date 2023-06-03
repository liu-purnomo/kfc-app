import { urlServer } from "../../utils/urlServer";
import { ITEMS_DELETE_FAIL, ITEMS_DELETE_PENDING, ITEMS_DELETE_SUCCESS } from "../actionType";

const itemDeletePending = () => ({
    type: ITEMS_DELETE_PENDING,
})

const itemDeleteSuccess = (successMessage) => ({
    type: ITEMS_DELETE_SUCCESS,
    payload: successMessage
})

const itemDeleteFail = (errorMessage) => ({
    type: ITEMS_DELETE_FAIL,
    payload: errorMessage
})

const itemsDelete = (id) => async (dispatch, getState) => {
    try {
        dispatch(itemDeletePending())
        const response = await fetch(urlServer + '/items/' + id, {
            method: 'DELETE',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        const responseJson = response.json()
        if (!response.ok) {
            throw (responseJson)
        } else {
            dispatch(itemDeleteSuccess(responseJson.message))
        }
    } catch (err) {
        dispatch(itemDeleteFail(err.message))
    }
}

export default itemsDelete