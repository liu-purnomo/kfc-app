import { ITEMS_GET_FAIL, ITEMS_GET_PENDING, ITEMS_GET_SUCCESS } from "../actions/actionType";

const initialState = {
    items: {},
    isLoading: false,
    isError: false,
    errorMessage: undefined
}

const itemsGetReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_GET_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case ITEMS_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload
            }

        case ITEMS_GET_FAIL:
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


export default itemsGetReducer