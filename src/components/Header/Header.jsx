import React from "react";

function Header(props) {
  const {arrayProductOrderCard = [], onRemoveItemFromCard} = props
  return (
    <header>
      <div id="header-sticky" className="header-area box-90 sticky-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
              <div className="logo">
                <a href="#">
                  <img src="./assets/logo_shop.png" alt="" />
                </a>
              </div>
              <div className="category-menu">
                <h4>Category</h4>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-shopping-cart" /> Table lamp
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-shopping-cart" /> Furniture
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-shopping-cart" /> Chair
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-shopping-cart" /> Men
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-shopping-cart" /> Women
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-shopping-cart" /> Cloth
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-shopping-cart" /> Trend
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <div className="main-menu text-center">
                <nav id="mobile-menu" style={{ display: "block" }}>
                  <ul>
                    <li>
                      <a href="./index.html">Home</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="submenu">
                        <li>
                          <a href="./detail.html">Product Detail</a>
                        </li>
                        <li>
                          <a href="./login.html">login</a>
                        </li>
                        <li>
                          <a href="./register.html">Register</a>
                        </li>
                        <li>
                          <a href="./cart.html">Shoping Cart</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
              <div className="header-right f-right">
                <ul>
                  <li className="search-btn">
                    <a
                      className="search-btn nav-search search-trigger"
                      href="#"
                    >
                      <i className="fas fa-search" />
                    </a>
                  </li>
                  <li className="login-btn">
                    <a href="#">
                      <i className="far fa-user" />
                    </a>
                  </li>
                  <li className="d-shop-cart">
                    <a href="#">
                      <i className="fas fa-shopping-cart" />{" "}
                      <span className="cart-count">{arrayProductOrderCard.length}</span>
                    </a>
                    <ul className="minicart">
                      {
                        arrayProductOrderCard.map(element => {
                          return (
                            <li>
                            <div className="cart-img">
                              <a href="#">
                                <img src="./assets/pro1.jpg" alt="" />
                              </a>
                            </div>
                            <div className="cart-content">
                              <h3>
                                <a href="#">{element.name}</a>
                              </h3>
                              <div className="cart-price">
                                <span className="new">{element.price}</span>
                                <span>
                                  <del>{element.finalPrice}</del>
                                </span>
                              </div>
                            </div>
                            <div className="del-icon">
                              <a href="#" onClick={() => {
                                onRemoveItemFromCard(element)
                              }}>
                                <i className="far fa-trash-alt" />
                              </a>
                            </div>
                          </li>)
                        })
                      }
                      <li>
                        <div className="total-price">
                          <span className="f-left">Total:</span>
                          <span className="f-right">{arrayProductOrderCard.reduce((accumulator, currentValue) => {
                              return accumulator + currentValue.finalPrice
                          },0)}$</span>
                        </div>
                      </li>
                      <li>
                        <div className="checkout-link">
                          <a href="#">Shopping Cart</a>
                          <a className="red-color" href="#">
                            Checkout
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 d-xl-none">
              <div className="mobile-menu" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
