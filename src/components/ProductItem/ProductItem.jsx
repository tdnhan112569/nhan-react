import React from 'react'
import  './ProductItem.css'
import {Link, Redirect} from 'react-router-dom'

function ProductItem(props) {

    const {item, _userInfo, putToCart} = props

    const addToCard = () => {
      putToCart(item)
    }

    const onPriceDisplay = (text) => {
      if ((text + '').length <= 3) return text + ''
      let i = 0
      let price = (text + '').split('')
      var priceToText = "";
      let count = 0
      for (i = price.length - 1; i >= 0; i--) {
          if (count === 3) {
              priceToText = price[i] + ',' + priceToText;
              count = 0;
          } else {
              priceToText = price[i] + priceToText
          }
          count++
      }
      return priceToText
    }

    const param = `/detail/${item.product_id}`
    console.log(_userInfo)

    return (
        <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="product-wrapper mb-50">
          <div className="product-img mb-25">
            <a href="#">
              <img src={item.img_url} alt="" />
              <img className="secondary-img" src={item.url_icon_event} alt="" />
            </a>
            <div className="product-action text-center">
              <a href="#" title="Shopping Cart" onClick={addToCard}>
                <i className="fas fa-shopping-cart" />
              </a>
              <Link to={param}>
                    <i className="fas fa-search" />
              </Link>
            </div>
          </div>
          <div className="product-content pr-0">
            <div className="pro-cat mb-10">
              <a href="#">{item.category}</a>
            </div>
            <h4>
              <a href="#">{item.name}</a>
            </h4>
            <div className="product-meta">
              <div className="pro-price">
                <span>{onPriceDisplay(item.final_price)}$</span>
                <span className="old-price">{onPriceDisplay(item.price)}$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductItem