import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Header from './Header'
import {initUserInfo} from './Header.action'

const mapStateToProps = (props) => {
    const {loginRed, headerRed} = props
    const {listItemCart} = headerRed
    console.log(props)
    return {
        user:loginRed.user,
        listItemCart
    }
}

const mapDispatchToProps = {
    onInitUserState : initUserInfo
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))