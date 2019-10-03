import { connect } from "react-redux";
import { putToCart } from "../Header/Header.action";
import { onFetchProductDetail } from "./ProductDetail.action";
import ProductDetail from "./ProductDetail";

const mapStateToProps = state => {
  const { productDetailReducer } = state;
  const { itemInfo, error, load } = productDetailReducer;

  return {
    itemInfo,
    error,
    load
  };
};

const mapDispatchToProps = {
  onFetchProductDetail,
  putToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
