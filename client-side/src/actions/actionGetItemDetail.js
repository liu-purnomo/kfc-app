import { GET_ITEM_DETAIL_FAIL, GET_ITEM_DETAIL_PENDING, GET_ITEM_DETAIL_SUCCESS } from './actionType';

export const getItemDetailPending = () => ({
    type: GET_ITEM_DETAIL_PENDING
})

export const getItemDetailSuccess = (payload) => ({
    type: GET_ITEM_DETAIL_SUCCESS,
    payload: payload
})

export const getItemDetailFail = (errorMessage) => ({
    type: GET_ITEM_DETAIL_FAIL,
    payload: errorMessage
})

export const actionGetItemDetail = (id) => async (dispatch, getState) => {
    try {
        dispatch(getItemDetailPending)
        const response = await fetch('https://kfc-server.liupurnomo.com/items/' + id)
        const responseJson = await response.json()
        if (!response.ok) {
            throw (responseJson)
        } else {
            dispatch(getItemDetailSuccess(responseJson))
        }
    } catch (err) {
        dispatch(getItemDetailFail(err.message))
    }
}