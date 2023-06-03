import { ITEMS_DETAIL_FAIL, ITEMS_DETAIL_PENDING, ITEMS_DETAIL_SUCCESS, RESET_DATA } from "../actions/actionType";

const initialState = {
    itemDetail: {},
    isLoading: true,
    isError: false,
    errorMessage: undefined
}

const itemsDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_DETAIL_PENDING:
            return {
                ...state,
                isLoading: true
            }

        case ITEMS_DETAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                itemDetail: action.payload,

            }

        case ITEMS_DETAIL_FAIL:
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


export default itemsDetailReducer