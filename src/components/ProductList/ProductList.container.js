import {connect} from 'react-redux'
import ProductList from './ProductList'
import {getProducts } from './ProductList.action'
  
const mapStateToProps = (state) => {
    return {
        a : 1
    }
}
  
const mapDispatchToProps = {
    getProductList2 : getProducts
}
  
export default connect(undefined, mapDispatchToProps)(ProductList)