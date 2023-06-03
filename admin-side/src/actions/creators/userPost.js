import { urlServer } from "../../utils/urlServer";
import { actionItemsDetail } from "../actionCreator";
import { USER_CREATE_FAIL, USER_CREATE_PENDING, USER_CREATE_SUCCESS } from "../actionType";

export const postUserPending = () => ({
    type: USER_CREATE_PENDING
})

export const postUserSuccess = () => ({
    type: USER_CREATE_SUCCESS
})

export const postUserFail = (errorMessage) => ({
    type: USER_CREATE_FAIL,
    payload: errorMessage
})

export const userPost = (formData) => async (dispatch, getState) => {

    try {
        dispatch(postUserPending())
        const response = await fetch(urlServer + '/users/register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
        const responJson = await response.json()
        if (!response.ok) {
            throw (responJson)
        } else {
            dispatch(postUserSuccess())
        }
    } catch (err) {
        dispatch(postUserFail(err.message))
    }
}