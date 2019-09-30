export const INIT_USER_STATE = 'INIT_USER_STATE'

export const initUserInfo = (user) => {
    return dispatchEvent => {
        dispatchEvent(()=>{
            return {
                type : INIT_USER_STATE,
                payload : user
            }
        })
    }
} 