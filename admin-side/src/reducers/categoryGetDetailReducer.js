import { CATEGORY_DETAIL_FAIL, CATEGORY_DETAIL_PENDING, CATEGORY_DETAIL_SUCCESS } from '../actions/actionType';

const initialState = {
    category: {},
    isLoading: false,
    isError: false,
    errorMessage: undefined
}

export const categoryGetDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_DETAIL_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case CATEGORY_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                category: action.payload
            }

        case CATEGORY_DETAIL_FAIL:
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