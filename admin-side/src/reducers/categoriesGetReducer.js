import { CATEGORIES_GET_FAIL, CATEGORIES_GET_PENDING, CATEGORIES_GET_SUCCESS } from "../actions/actionType";

const initialState = {
    categories: {},
    isLoading: false,
    isError: false,
    errorMessage: undefined
}


const categoriesGetReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_GET_PENDING:
            return {
                ...state,
                isLoading: true,
            }

        case CATEGORIES_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload
            }

        case CATEGORIES_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload
            }

        default:
            return state
    }
}

export default categoriesGetReducer