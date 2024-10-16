import state from "./state";
import { ACTIONSPOST } from "./types";

export default{
    [ACTIONSPOST.SET_STATUS]:(state, action)=>{
        state.status = action.payload;
    },
};