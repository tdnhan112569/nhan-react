import firebaseApp from '../../firebase'

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCES = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"

const onStartLogin = (error) => {
    return {
        type : LOGIN_START,
        //payload : error
    }
}

const onSuccessLogin = (user) => {
    return {
        type : LOGIN_SUCCES,
        payload : user
    }
}

const onFailedLogin = (message) => {
    return {
        type : LOGIN_FAIL,
        payload : message
    }
}

export const onSignInWithFirebase = (email, password) =>{
    return dispatchEvent => {
        dispatchEvent(onStartLogin())
        firebaseApp.auth().signInWithEmailAndPassword( email, password)
        .then(result => {
            dispatchEvent(onSuccessLogin(result.user))
        }).catch(error  => {
            dispatchEvent(onFailedLogin(error))
        })
    }
    
}