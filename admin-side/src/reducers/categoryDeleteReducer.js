import { CATEGORY_DELETE_FAIL, CATEGORY_DELETE_PENDING, CATEGORY_DELETE_SUCCESS, RESET_DATA } from "../actions/actionType";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: undefined
}

const categoryDeleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_DELETE_PENDING:
            return {
                isLoading: true
            }

        case CATEGORY_DELETE_SUCCESS:
            return {
                isLoading: false,
                isSuccess: true
            }

        case CATEGORY_DELETE_FAIL:
            return {
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

export default categoryDeleteReducer