import { USER_GET_FAIL, USER_GET_PENDING, USER_GET_SUCCESS } from "../actions/actionType";

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
    errorMessage: undefined
}

const userGetReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_GET_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case USER_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: action.payload
            }

        case USER_GET_FAIL:
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


export default userGetReducer