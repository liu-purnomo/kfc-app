import { CATEGORY_UPDATE_FAIL, CATEGORY_UPDATE_PENDING, CATEGORY_UPDATE_SUCCESS, RESET_DATA } from "../actions/actionType";

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: undefined
}

export const categoryeditReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_UPDATE_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case CATEGORY_UPDATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true
            }

        case CATEGORY_UPDATE_FAIL:
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