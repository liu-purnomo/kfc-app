import { RESET_DATA } from "../actionType";

export const resetData = () => ({
    type: RESET_DATA
})

export const actionResetData = () => async (dispact, getState) => {
    dispact(resetData())
}