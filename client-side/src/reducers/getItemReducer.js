import { GET_ITEMS_FAIL, GET_ITEMS_PENDING, GET_ITEMS_SUCCESS } from "../actions/actionType";

const initialState = {
    items: {},
    isLoading: true,
    isError: false,
    errorMessage: undefined
}

export const getItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case GET_ITEMS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload
            }

        case GET_ITEMS_FAIL:
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