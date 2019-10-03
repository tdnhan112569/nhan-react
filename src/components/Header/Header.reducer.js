import {INIT_USER_STATE, PUT_TO_CART, REMOVE_FORM_CART} from './Header.action'
const initState = {
    user : null,
    listItemCart : []
}

const headerReducer = (state = initState, action) => {
    const {type, payload} = action
    switch (type) {
        case INIT_USER_STATE:{
            return {
                ...state, user : payload
            }
        }
        case PUT_TO_CART : {
            // console.log( state, "Ok ne")
            // console.log(action, "21")
            // console.log(payload, "31")
            const listItem = [...state.listItemCart, payload]
            const c = {};
            for (let i = 0; i < listItem.length; i++) {
                const current = listItem[i];
                const isExist = c[current.id];
                if (!isExist) {
                    c[current.id] = { ...listItem[i] };
                } else {
                    c[current.id].quantity += payload.quantity;
                }
            }
            console.log("Ket qua cuoi cung ",Object.values(c))
            
            return {
                ...state,
                listItemCart: Object.values(c)
            }
        }
        case REMOVE_FORM_CART : {
            let index = 0
            const {listItemCart} = state
            let listItemAfterRemove = listItemCart.splice(index, 1)
            return {
                ...state,
                listItemCart : listItemAfterRemove
            }
        }
        default : {
            return state
        }
    }
}

export default headerReducer