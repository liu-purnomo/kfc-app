import { urlServer } from "../../utils/urlServer";
import { USER_GET_PENDING, USER_GET_SUCCESS } from "../actionType";

export const userGetPending = () => ({
    type: USER_GET_PENDING
})

export const userGetSuccess = (userList) => ({
    type: USER_GET_SUCCESS,
    payload: userList
})

export const userGetFail = (errorMessage) => ({
    type: USER_GET_FAIL,
    payload: errorMessage
})


export const userGet = () => async (dispatch, getState) => {
    try {
        const response = await fetch(urlServer + '/users')
        const responJson = await response.json()
        dispatch(userGetSuccess(responJson))
    } catch (err) {
        dispatch(userGetFail(err.message))
    }
}