import { urlServer } from "../../utils/urlServer";
import { CATEGORY_UPDATE_FAIL, CATEGORY_UPDATE_PENDING, CATEGORY_UPDATE_SUCCESS } from "../actionType";

const categoryEditPending = () => ({
    type: CATEGORY_UPDATE_PENDING
})

const categoryEditSuccess = () => ({
    type: CATEGORY_UPDATE_SUCCESS,
})

const categoryEditFail = (errorMessage) => ({
    type: CATEGORY_UPDATE_FAIL,
    payload: errorMessage
})

export const categoryEdit = (id, name) => async (dispatch, getState) => {
    try {
        dispatch(categoryEditPending())
        const response = await fetch(urlServer + '/categories/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                name
            }),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                "access_token": localStorage.getItem('access_token')
            },
        })
        const categoriesJson = await response.json()
        if (!response.ok) {
            throw (categoriesJson)
        } else {
            dispatch(categoryEditSuccess())
        }
    } catch (err) {
        dispatch(categoryEditFail(err.message))
    }
}