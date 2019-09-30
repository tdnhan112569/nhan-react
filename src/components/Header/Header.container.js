import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Header from './Header'
import {initUserInfo} from './Header.action'

const mapStateToProps = (props) => {
    const {loginRed} = props
    console.log(props)
    return {
        user:loginRed.user
    }
}

const mapDispatchToProps = {
    onInitUserState : initUserInfo
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))