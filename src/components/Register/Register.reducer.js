const stateOfRegister = {
    email : '',
    password : '',
    name : ''
}

const RegisterReducer = (state = stateOfRegister, action) => {
    const {type, payload} = action
    switch(type) {
        case 'REGISTER_USER' : {
            const {email, password, name} = payload
            var object = {
                ...state,
                email : email,
                password : password,
                name : name
            }
            //console.log("O reducer ne")
            console.log(object)
            return object
        }
        default: return state
    }
} 

export default RegisterReducer