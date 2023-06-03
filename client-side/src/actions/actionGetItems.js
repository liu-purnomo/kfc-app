import { GET_ITEMS_FAIL, GET_ITEMS_PENDING, GET_ITEMS_SUCCESS } from "./actionType";

export const getItemPending = () => ({
    type: GET_ITEMS_PENDING
})

export const getItemSuccess = (payload) => ({
    type: GET_ITEMS_SUCCESS,
    payload: payload
})

export const getItemFail = (errorMessage) => ({
    type: GET_ITEMS_FAIL,
    payload: errorMessage
})

export const actionGetItem = () => async (dispatch, getState) => {
    try {
        dispatch(getItemPending)
        const response = await fetch('https://kfc-server.liupurnomo.com/items')
        const responseJson = await response.json()
        if (!response.ok) {
            throw (responseJson)
        } else {
            dispatch(getItemSuccess(responseJson))
        }
    } catch (err) {
        dispatch(getItemFail(err.message))
    }
}
