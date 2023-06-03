import { urlServer } from "../../utils/urlServer"
import { USER_LOGIN_FAIL, USER_LOGIN_PENDING, USER_LOGIN_SUCCESS } from "../actionType"

export const loginPending = () => ({
    type: USER_LOGIN_PENDING
})

export const loginSuccess = (access_token) => ({
    type: USER_LOGIN_SUCCESS,
    payload: access_token
})

export const loginFail = (errorMessage) => ({
    type: USER_LOGIN_FAIL,
    payload: errorMessage
})

export const userlogin = (dataInput) => async (dispatch, getState) => {
    try {
        dispatch(loginPending())
        const response = await fetch(urlServer + '/users/login', {
            method: "POST",
            body: JSON.stringify(dataInput),
            headers: {
                "Content-Type": "application/json",
            },
        })
        const responJson = await response.json()
        if (!response.ok) {
            throw (responJson)
        } else {
            dispatch(loginSuccess(responJson.access_token))
        }
    } catch (err) {
        dispatch(loginFail(err.message))
    }
}