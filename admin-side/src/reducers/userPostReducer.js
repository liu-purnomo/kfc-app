import { RESET_DATA, USER_CREATE_FAIL, USER_CREATE_PENDING, USER_CREATE_SUCCESS } from "../actions/actionType";

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: undefined
}

const userPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_CREATE_PENDING:
            return {
                ...state,
                isLoading: true,
            }

        case USER_CREATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true
            }

        case USER_CREATE_FAIL:
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

export default userPostReducer