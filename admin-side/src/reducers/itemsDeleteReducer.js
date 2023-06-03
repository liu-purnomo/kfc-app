import { ITEMS_DELETE_FAIL, ITEMS_DELETE_PENDING, ITEMS_DELETE_SUCCESS } from "../actions/actionType";

const initialState = {
    isLoading: false,
    isError: false,
    successMessage: undefined,
    errorMessage: undefined
}

const itemsDeleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_DELETE_PENDING:
            return {
                isLoading: true
            }


        case ITEMS_DELETE_SUCCESS:
            return {
                isLoading: false,
                successMessage: action.payload
            }


        case ITEMS_DELETE_FAIL:
            return {
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }

        default:
            return state
    }
}

export default itemsDeleteReducer