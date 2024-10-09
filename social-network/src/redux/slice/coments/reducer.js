import state from "../coments/state";
import { ACTIONSCOMENTS } from "./types";

export default{
    [ACTIONSCOMENTS.SET_STATUS]:(state, action)=>{
        state.status = action.payload;
    }
};