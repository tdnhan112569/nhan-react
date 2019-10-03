export const LOADING = 'LOADING'
export const FAIL = 'FAIL'
export const SUCCESS = 'SUCCESS'

export const onLoading = () => {
    return {
        type : LOADING,
    }
}

export const onFail = (error) => {
    return {
        type : FAIL,
        payload : error
    }
}

export const onSuccess = (item) => {
    return {
        type : SUCCESS,
        payload : item
    }
}

export const onFetchProductDetail = (id) => {
    return (dispatchEvent, getState) => {
        dispatchEvent(onLoading())
        const url = `https://mapi.sendo.vn/mob/product/${id}/detail/`
        return fetch(url)
        .then(r => r.json())
        .then(result => dispatchEvent(onSuccess(result)))
        .catch(error => dispatchEvent(onFail(error)))
    }
} 