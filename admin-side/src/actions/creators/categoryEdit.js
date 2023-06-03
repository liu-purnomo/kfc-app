import { urlServer } from "../../utils/urlServer";
import { CATEGORY_UPDATE_FAIL, CATEGORY_UPDATE_PENDING, CATEGORY_UPDATE_SUCCESS } from "../actionType";

const categoryUpdatePending = () => ({
    type: CATEGORY_UPDATE_PENDING
})

const categoryUpdateSuccess = () => ({
    type: CATEGORY_UPDATE_SUCCESS,
})

const categoryUpdateFail = (errorMessage) => ({
    type: CATEGORY_UPDATE_FAIL,
    payload: errorMessage
})

export const categoryUpdate = (id, formValue) => async (dispatch, getState) => {
    try {
        dispatch(categoryUpdatePending())
        const response = await fetch(urlServer + '/categories/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                formValue
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
            dispatch(categoryUpdateSuccess())
        }
    } catch (err) {
        dispatch(categoryUpdateFail(err.message))
    }
}