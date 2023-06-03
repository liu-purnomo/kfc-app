import { urlServer } from "../../utils/urlServer";
import { ITEMS_EDIT_FAIL, ITEMS_EDIT_PENDING, ITEMS_EDIT_SUCCESS } from "../actionType";

const itemEditPending = () => ({
    type: ITEMS_EDIT_PENDING
})

const itemsEditSuccess = () => ({
    type: ITEMS_EDIT_SUCCESS
})

const itemEditFail = (errorMessage) => ({
    type: ITEMS_EDIT_FAIL,
    payload: errorMessage
})

export const itemsEdit = (id, formValue, ingredients) => async (dispact, getState) => {
    try {
        dispact(itemEditPending())
        const response = await fetch(urlServer + '/items/' + id, {
            method: 'PUT',
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
        if (!response.ok) {
            throw (responseJson)
        } else {
            dispact(itemsEditSuccess())
        }
    } catch (err) {
        dispact(itemEditFail(err.message))
    }
}