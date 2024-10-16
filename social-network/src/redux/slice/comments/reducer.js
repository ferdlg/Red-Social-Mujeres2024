import state from "./state";
import { ACTIONSCOMMENTS } from "./types";

export default{
    [ACTIONSCOMMENTS.SET_STATUS]:(state, action)=>{
        state.status = action.payload;
    }
};