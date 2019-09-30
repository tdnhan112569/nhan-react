import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import LoginView from './Login'
import {onSignInWithFirebase } from './Login.action'
  
const mapStateToProps = (state) => {
    console.log(state)
    const {loginRed} = state
    const {user, errorMess, loading} = loginRed
    console.log(errorMess.message)
    return {
        _user : user,
        _errorMess : errorMess.message,
        _loading : loading
    }
}
  
const mapDispatchToProps = {
    _onSignInWithFirebase : onSignInWithFirebase
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginView))