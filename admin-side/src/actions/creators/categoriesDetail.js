import { urlServer } from "../../utils/urlServer";
import { CATEGORY_DETAIL_FAIL, CATEGORY_DETAIL_PENDING, CATEGORY_DETAIL_SUCCESS } from "../actionType";

const categoryDetailPending = () => ({
    type: CATEGORY_DETAIL_PENDING
})

const categoryDetailSuccess = (categoriesData) => ({
    type: CATEGORY_DETAIL_SUCCESS,
    payload: categoriesData
})

const categoryDetailFail = (errorMessage) => ({
    type: CATEGORY_DETAIL_FAIL,
    payload: errorMessage
})

export const categoryDetail = (id) => async (dispatch, getState) => {
    try {
        dispatch(categoryDetailPending())
        const response = await fetch(urlServer + '/categories/' + id, {
            headers: {
                access_token: localStorage.access_token
            }
        })
        const categoriesJson = await response.json()
        if (!response.ok) {
            throw (categoriesJson)
        } else {
            dispatch(categoryDetailSuccess(categoriesJson))
        }
    } catch (err) {
        dispatch(categoryDetailFail(err.message))
    }
}