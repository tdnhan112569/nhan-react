import {connect} from 'react-redux'
import RegisterForm from './'
import {registerUserWithEmailPassword} from './Register.action'
  
const mapDispatchToProps = {
    registerUserWithEmailPassword
}
  
  export default connect(undefined, mapDispatchToProps)(RegisterForm)