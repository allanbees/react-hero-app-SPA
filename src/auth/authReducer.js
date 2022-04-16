
/* const state = {
    name: 'Allan',
    logged: 'true'
} This is how my state is supposed to look */

import { types } from "../types/types";

export const authReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        
        case types.logout: 
            return {
                logged: false
            }
    
        default:
            return state;
    }
}