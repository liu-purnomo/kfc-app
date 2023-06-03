import { ITEMS_EDIT_FAIL, ITEMS_EDIT_PENDING, ITEMS_EDIT_SUCCESS, RESET_DATA } from "../actions/actionType";

const initialState = {
    isSuccess: false,
    isLoading: true,
    isFail: false,
    errorMessage: undefined
}


const itemsEditReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_EDIT_PENDING:
            return {
                ...initialState,
                isLoading: true
            }

        case ITEMS_EDIT_SUCCESS:
            return {
                ...initialState,
                isLoading: false,
                isSuccess: true,
                errorMessage: undefined,
                isError: false,
            }

        case ITEMS_EDIT_FAIL:
            return {
                ...initialState,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }

        case RESET_DATA:
            return initialState

        default:
            return state
    }
}

export default itemsEditReducer