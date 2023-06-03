import { GET_ITEM_DETAIL_FAIL, GET_ITEM_DETAIL_PENDING, GET_ITEM_DETAIL_SUCCESS } from '../actions/actionType';

const initialState = {
    item: {},
    isLoading: true,
    isError: false,
    errorMessage: undefined
}

export const getItemDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEM_DETAIL_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case GET_ITEM_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                item: action.payload
            }

        case GET_ITEM_DETAIL_FAIL:
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