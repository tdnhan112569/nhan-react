
export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST"
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS"
export const PRODUCT_LIST_ERROR = "PRODUCT_LIST_ERROR"

export function productListRequest() {
    return {
        type: PRODUCT_LIST_REQUEST,
    }
}
//Action Creator
export function productListSuccess(data) {
    return {
        type: PRODUCT_LIST_SUCCESS,
        payload: data
    };
}

//Action Creator
export function productListFail(error) {
    return {
        type: PRODUCT_LIST_ERROR,
        error: error
    };
}

export function getProducts() {
    return (dispatch) => {
        dispatch(productListRequest())  
        return fetch("https://mapi.sendo.vn/mob/product/search?p=1&q=M%C3%B3c%20kho%C3%A1%20m%C3%A8o%20cute")
            .then(r => r.json())
            .then(result => dispatch(productListSuccess(result.data)))
            .catch(error => dispatch(productListFail(error)))

    }
}
export function setProducts(temp){
    return (dispatch) => {
        dispatch(productListSuccess([...temp]))
    }
}

export function searchProduct(name){
    return (dispatch) => {
        dispatch(productListRequest())  
        return fetch("https://mapi.sendo.vn/mob/product/search?p=1&q="+name)
            .then(r => r.json())
            .then(result => dispatch(productListSuccess(result.data)))
            .catch(error => dispatch(productListFail(error)))
    }
}