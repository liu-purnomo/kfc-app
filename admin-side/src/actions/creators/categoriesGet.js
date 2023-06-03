import { urlServer } from "../../utils/urlServer";
import { CATEGORIES_GET_FAIL, CATEGORIES_GET_PENDING, CATEGORIES_GET_SUCCESS } from "../actionType";

const categoriesGetPending = () => ({
    type: CATEGORIES_GET_PENDING
})

const categoriesGetSuccess = (categoriesData) => ({
    type: CATEGORIES_GET_SUCCESS,
    payload: categoriesData
})

const categoriesGetFail = (errorMessage) => ({
    type: CATEGORIES_GET_FAIL,
    payload: errorMessage
})

export const categoriesGet = () => async (dispatch, getState) => {
    try {
        dispatch(categoriesGetPending())
        const response = await fetch(urlServer + '/categories', {
            headers: {
                access_token: localStorage.access_token
            }
        })
        const categoriesJson = await response.json()
        if (!response.ok) {
            throw (categoriesJson)
        } else {
            dispatch(categoriesGetSuccess(categoriesJson))
        }
    } catch (err) {
        dispatch(categoriesGetFail(err.message))
    }
}