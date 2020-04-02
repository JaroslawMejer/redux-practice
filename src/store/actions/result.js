import * as actionTypes from "./actionTypes";

export const saveResult = ( passedValue) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: passedValue
    }
}

export const storeResult = (passedValue) =>{
    return dispatch => {
        setTimeout(() =>{
            dispatch(saveResult(passedValue))
        },2000);
    }

};

export const deleteResult = (deleteValue) =>{
    return {
        type: actionTypes.DELETE_RESULT,
        toDelete: deleteValue
    }
};