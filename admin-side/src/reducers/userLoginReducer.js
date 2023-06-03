import { RESET_DATA, USER_LOGIN_FAIL, USER_LOGIN_PENDING, USER_LOGIN_SUCCESS } from "../actions/actionType";

const initialState = {
    isSuccess: false,
    isLoading: false,
    isError: false,
    token: undefined,
    errorMessage: undefined
}

const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_PENDING:
            return {
                ...state,
                isLoading: true,
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...initialState,
                isLoading: false,
                isSuccess: true,
                token: action.payload
            }
        case USER_LOGIN_FAIL:
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

export default userLoginReducer