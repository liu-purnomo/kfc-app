import { urlServer } from "../../utils/urlServer";
import { CATEGORIES_POST_FAIL, CATEGORIES_POST_PENDING, CATEGORIES_POST_SUCCESS } from "../actionType";

const categoriesPostPending = () => ({
    type: CATEGORIES_POST_PENDING
})

const categoriesPostSuccess = () => ({
    type: CATEGORIES_POST_SUCCESS,
})

const categoriesPostFail = (errorMessage) => ({
    type: CATEGORIES_POST_FAIL,
    payload: errorMessage
})

export const categoriesPost = (formValue) => async (dispatch, getState) => {
    try {
        dispatch(categoriesPostPending())
        const response = await fetch(urlServer + '/categories', {
            method: 'POST',
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
            dispatch(categoriesPostSuccess())
        }
    } catch (err) {
        dispatch(categoriesPostFail(err.message))
    }
}