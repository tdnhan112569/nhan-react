import {LOADING, FAIL, SUCCESS} from './ProductDetail.action'
const productDetailState = {
    itemInfo : {},
    error : "",
    load : false
}

const productDetailReducer = (state = productDetailState, action) => {
    const {type, payload} = action
    switch(type) {
        case LOADING : {
            return {
                ...state,
                load : true,
                error : "",
                itemInfo : {}
            }
        }
        case FAIL : {
            return {
                ...state,
                load : false,
                itemInfo : {},
                error : payload
            }
        }
        case SUCCESS : {
            return {
                ...state,
                load : true,
                itemInfo : payload,
                error : ""
            }
        }
        default : {
            return state
        }
    }
}

export default productDetailReducer