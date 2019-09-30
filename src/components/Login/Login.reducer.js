import {LOGIN_START, LOGIN_SUCCES, LOGIN_FAIL} from './Login.action'

const initState =  {
    user : null,
    code : 0,
    errorMess : {
        code : '',
        message : ''
    },
    loading : false
}

const LoginReducer = (state = initState, action) => {
    const {type} = action
    switch(type) {
        case LOGIN_START : {
            return {...state, loading : true, user : null, errorMess : {code : '', message : ''}}
        }
        case LOGIN_SUCCES : {
            const {payload} = action
            return {...state, user : payload, loading : false, errorMess : {code : '', message : ''}}
        }
        case LOGIN_FAIL : {
            const {payload} = action
            return {...state,  errorMess: payload, loading : false}
        }
        default : {
            return state
        }
    }
}

export default LoginReducer