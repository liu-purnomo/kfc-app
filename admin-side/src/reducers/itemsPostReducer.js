import { ITEMS_POST_FAIL, ITEMS_POST_PENDING, ITEMS_POST_SUCCESS, RESET_DATA } from "../actions/actionType";

const initialState = {
    isSuccess: false,
    isLoading: false,
    isFail: false,
    errorMessage: undefined
}


const itemsPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_POST_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case ITEMS_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true
            }

        case ITEMS_POST_FAIL:
            return {
                ...state,
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

export default itemsPostReducer