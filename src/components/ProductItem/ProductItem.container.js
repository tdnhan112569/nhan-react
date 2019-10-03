import {connect} from 'react-redux'
import ProductItemView from './ProductItem'
import {putToCart} from '../Header/Header.action'

const mapStateToProps = (state) => {
    const {loginRed} = state
    const {user} = loginRed
    return {
        _userInfo : user
    } 
}

const mapDispatchToProps = {
    putToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemView)