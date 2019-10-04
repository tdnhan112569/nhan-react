import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {removeItemById} from '../Header/Header.action'
import CartForm from './Cart'

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
    removeItemById
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (CartForm))