import { urlServer } from "../../utils/urlServer";
import { ITEMS_GET_FAIL, ITEMS_GET_PENDING, ITEMS_GET_SUCCESS } from "../actionType";

const itemsGetPending = () => ({
    type: ITEMS_GET_PENDING
})

const itemsGetSuccess = (itemsData) => ({
    type: ITEMS_GET_SUCCESS,
    payload: itemsData
})

const itemsGetFail = (errorMessage) => ({
    type: ITEMS_GET_FAIL,
    payload: errorMessage
})

export const itemsGet = () => async (dispatch, getState) => {
    try {
        dispatch(itemsGetPending())
        const response = await fetch(urlServer + '/items')
        const itemsJson = await response.json()
        if (!response.ok) {
            throw (itemsJson)
        } else {
            dispatch(itemsGetSuccess(itemsJson))
        }
    } catch (err) {
        dispatch(itemsGetFail(err))
    }
}