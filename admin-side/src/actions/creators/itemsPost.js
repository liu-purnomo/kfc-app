import { urlServer } from "../../utils/urlServer";
import { ITEMS_POST_FAIL, ITEMS_POST_PENDING, ITEMS_POST_SUCCESS } from "../actionType";

const itemPostPending = () => ({
    type: ITEMS_POST_PENDING
})

const itemsPostSuccess = () => ({
    type: ITEMS_POST_SUCCESS
})

const itemPostFail = (errorMessage) => ({
    type: ITEMS_POST_FAIL,
    payload: errorMessage
})

export const itemsPost = (formValue, ingredients) => async (dispact, getState) => {
    try {
        dispact(itemPostPending())
        const response = await fetch(urlServer + '/items', {
            method: 'POST',
            body: JSON.stringify({
                item: formValue,
                ingredients
            }),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                "access_token": localStorage.getItem('access_token')
            },

        })
        const responseJson = await response.json()
        dispact(itemsPostSuccess())
    } catch (err) {
        dispact(itemPostFail(err.message))
    }
}