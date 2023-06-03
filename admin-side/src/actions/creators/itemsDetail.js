import { urlServer } from "../../utils/urlServer";
import { ITEMS_DETAIL_FAIL, ITEMS_DETAIL_PENDING, ITEMS_DETAIL_SUCCESS } from "../actionType";
import { resetData } from "./reset";

export const itemsDetailPending = () => ({
    type: ITEMS_DETAIL_PENDING
})

export const itemsDetailSuccess = (itemsData) => ({
    type: ITEMS_DETAIL_SUCCESS,
    payload: itemsData
})

export const itemsDetailFail = (errorMessage) => ({
    type: ITEMS_DETAIL_FAIL,
    payload: errorMessage
})

export const itemsDetail = (id) => async (dispatch, getState) => {
    try {
        dispatch(itemsDetailPending())
        if (id === undefined) {
            dispatch(resetData())
        } else {
            const response = await fetch(urlServer + '/items/' + id, {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            const itemsJson = await response.json()
            dispatch(itemsDetailSuccess(itemsJson))
        }
    } catch (err) {
        dispatch(itemsDetailFail(err))
    }
}