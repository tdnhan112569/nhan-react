import {INIT_USER_STATE} from './Header.action'
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
        default : {
            return state
        }
    }
}

export default headerReducer