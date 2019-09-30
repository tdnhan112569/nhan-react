import {connect} from 'react-redux'
import ProductItemView from './ProductItem'

const mapStateToProps = (state) => {
    const {loginRed} = state
    const {user} = loginRed
    return {
        _userInfo : user
    } 
}

export default connect(mapStateToProps, undefined)(ProductItemView)