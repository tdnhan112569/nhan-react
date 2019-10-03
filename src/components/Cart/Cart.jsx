import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function CartForm(props) {
    const {listItemCart} = props

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
  
    return (
        <main>
        {/* breadcrumb-area-start */}
        <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Shoping Cart</h1>
                  <ul className="breadcrumb-menu">
                  <li> <Link to='/'>
                            <a>Home</a>
                          </Link></li>
                    <li><span>Cart</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* Cart Area Strat*/}
        <section className="cart-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          listItemCart.map(element => {
                            return (
                              <tr>
                                <td className="product-thumbnail"><a><img src={element.image} alt=""/></a></td>
                                <td className="product-name"><a>{element.name}</a></td>
                                <td className="product-price"><span className="amount">{onPriceDisplay (element.final_price)}</span></td>
                                <td className="product-quantity">
                                  <div className="cart-plus-minus"><input type="text" value={element.quantity} /><div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                                </td>
                                <td className="product-subtotal"><span className="amount">{onPriceDisplay(element.final_price * element.quantity)}</span></td>
                                <td className="product-remove"><a href="#"><i className="fa fa-times" /></a></td>
                              </tr>
                            )
                          })
                        }
                       
                        {/* <tr>
                          <td className="product-thumbnail"><a href="#"><img src="img/product/pro2.jpg" alt="" /></a></td>
                          <td className="product-name"><a href="#">Sujon Chair Set</a></td>
                          <td className="product-price"><span className="amount">$120.50</span></td>
                          <td className="product-quantity">
                            <div className="cart-plus-minus"><input type="text" defaultValue={1} /><div className="dec qtybutton">-</div><div className="inc qtybutton">+</div></div>
                          </td>
                          <td className="product-subtotal"><span className="amount">$120.50</span></td>
                          <td className="product-remove"><a href="#"><i className="fa fa-times" /></a></td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="coupon-all">
                        <div className="coupon">
                          <input id="coupon_code" className="input-text" name="coupon_code" defaultValue placeholder="Coupon code" type="text" />
                          <button className="btn theme-btn-2" name="apply_coupon" type="submit">Apply coupon</button>
                        </div>
                        <div className="coupon2">
                          <input className="btn theme-btn" name="update_cart" defaultValue="Update cart" type="submit" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 ml-auto">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul className="mb-20">
                          <li>Subtotal <span>$250.00</span></li>
                          <li>Total <span>$250.00</span></li>
                        </ul>
                        <a className="btn theme-btn" href="#">Proceed to checkout</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Cart Area End*/}
      </main>
    )
}