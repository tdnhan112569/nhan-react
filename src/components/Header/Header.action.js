export const INIT_USER_STATE = 'INIT_USER_STATE'
export const PUT_TO_CART = 'PUT_TO_CART'
export const REMOVE_FORM_CART = 'REMOVE_FROM_CART'

export const removeItemById = (id) => {
    return {
        type : REMOVE_FORM_CART,
        payload : id
    }
}

export const initUserInfo = (user) => {
    return dispatchEvent => {
        dispatchEvent({
                type : INIT_USER_STATE,
                payload : user
        })
    }
} 

export const putToCart = (productItem, quantity = 1) => {
    const { name, id, final_price, images , img_url} = productItem
    return (dispatchEvent, state) => {
        console.log(state,"Item duoc put vao cart")
        let img = (images === undefined)?img_url : "https://media3.scdn.vn" + images[0]
        dispatchEvent({
            type : PUT_TO_CART,
            payload : {
               name, id, final_price, quantity, image : img
            }
        })
    }
}