import { RESET_DATA, CATEGORIES_POST_FAIL, CATEGORIES_POST_PENDING, CATEGORIES_POST_SUCCESS } from "../actions/actionType";

const initialState = {
    isSuccess: false,
    isLoading: false,
    isError: false,
    errorMessage: undefined
}


const categoriesPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_POST_PENDING:
            return {
                ...state,
                isLoading: true,
            }

        case CATEGORIES_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true
            }

        case CATEGORIES_POST_FAIL:
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

export default categoriesPostReducer