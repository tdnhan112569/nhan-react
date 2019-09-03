import React from 'react'
import './ProductList.css'
import '../ProductItem/ProductItem'
import ProductItem from '../ProductItem/ProductItem';
function ProductList(props) {
    return (
        <main>
          {/* shop-area start */}
          <section className="shop-area pt-150 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-9 col-lg-8">
                  {/* tab filter */}
                  <div className="row mb-10">
                    <div className="col-xl-5 col-lg-6 col-md-6">
                      <div className="product-showing mb-40">
                        <p>Showing 1–22 of 32 results</p>
                      </div>
                    </div>
                  </div>
                  {/* tab content */}
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="row">
                         {props.productList.map(element  => {
                            return <ProductItem item={element}/>
                         })}
                      </div>
                    </div>
                  </div>
                </div>
                {/*SideBar */}
                <div className="col-xl-3 col-lg-4">
                  <div className="sidebar-shop">
                    <div className="shop-widget">
                      <h3 className="shop-title">Search by</h3>
                      <form action="#" className="shop-search">
                        <input type="text" placeholder="Your keyword...." />
                        <button><i className="fa fa-search" /></button>
                      </form>
                    </div>
                    {/* 
                              <div class="shop-widget">
                                  <h3 class="shop-title">Filter selection</h3>
                                  <div class="price-filter">
                                      <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%;"></span></div>
                                      <input type="text" id="amount">
                                  </div>
                              </div> */}
                    <div className="shop-widget">
                      <h3 className="shop-title">SHOP BY</h3>
                      <ul className="shop-link">
                        <li><a href="#">Name: A-Z</a></li>
                        <li><a href="#">Name: Z-A</a></li>
                        <li><a href="#">Price: High to Low</a></li>
                        <li><a href="#">Price: Low to High</a></li>
                        <li><a href="#">Product: Top Sales</a></li>
                      </ul>
                    </div>
                    <div className="shop-widget">
                      <h3 className="shop-title">Recent Product</h3>
                      <ul className="shop-sidebar-product">
                        <li>
                          <div className="side-pro-img">
                            <a href="#"><img src="./assets/shop-rsp3.jpg" alt="" /></a>
                          </div>
                          <div className="side-pro-content">
                            <div className="side-pro-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <h5><a href="#">Raglan Baseball-Style</a></h5>
                            <div className="side-pro-price">
                              <span>$119.00 USD</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="side-pro-img">
                            <a href="#"><img src="./assets/shop-rsp2.jpg" alt="" /></a>
                          </div>
                          <div className="side-pro-content">
                            <div className="side-pro-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <h5><a href="#">Raglan Baseball-Style</a></h5>
                            <div className="side-pro-price">
                              <span>$119.00 USD</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="side-pro-img">
                            <a href="#"><img src="./assets/shop-rsp4.jpg" alt="" /></a>
                          </div>
                          <div className="side-pro-content">
                            <div className="side-pro-rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <h5><a href="#">Raglan Baseball-Style</a></h5>
                            <div className="side-pro-price">
                              <span>$119.00 USD</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="shop-widget">
                      <div className="shop-sidebar-banner">
                        <a href="#"><img src="./assets/shop-banner.jpg" alt="" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /SideBar */}
              </div>
            </div>
          </section>
          {/* shop-area end */}
        </main>
      );
}

export default  ProductList