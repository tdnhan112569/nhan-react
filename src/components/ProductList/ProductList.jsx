import React, {useState, useEffect} from 'react'
import './ProductList.css'
import '../ProductItem/ProductItem'
import ProductItem from '../ProductItem/ProductItem.container';

function ProductList(props) {

  const {productList, onAddToCard, getProductList, getProductList2} = props

  console.log('this is props')
  console.log(props)
  console.log('---------------')
  
  useEffect(()=>{
    getProductList()
    getProductList2()
  },[])

  const NAME_SORTING = 0
  const PRICE_SORTING = 1
  const [productsShowing, setStateProductsShowing] = useState([])
  useEffect(()=>{
    setStateProductsShowing([...productList])
  },[productList])
  const [textChange, setText] = useState("")

  const filterProductTopSale = () => {
      setStateProductsShowing(productList.filter(element => {
         if(element.isTopSale) {
           return element
         }
      }))
  }

  const sortNameModifiedLowToHigh = (objectA, objectB) => {
    if(objectA.name > objectB.name) {
      return 1
    } 
    else if(objectA.name < objectB.name) {
      return -1
    }
    else {
      return 0
    }
  } 

  const sortNameModifiedHighToLow = (objectA, objectB) => {
    if(objectA.name > objectB.name) {
      return -1
    } 
    else if(objectA.name < objectB.name) {
      return 1
    }
    else {
      return 0
    }
  } 

  const sortPriceLowToHigh = (objectA, objectB) => {
    if(objectA.price > objectB.price) {
      return 1
    }
     else if(objectA.price < objectB.price) {
      return -1
    }
    else {
      return 0
    }
  }

  const sortPriceHighToLow = (objectA, objectB) => {
    if(objectA.price > objectB.price) {
      return -1
    }
    else if(objectA.price < objectB.price) {
      return 1
    }
    else {
      return 0
    }
  }

  const sortProduct = (mode, isFormLowToHigh) => { 
    // Mode  0 : sort for name 
    // Mode  1 : sort for price
    let productNew =[...productList]
    switch(mode) {
      case 0 : {
         if(isFormLowToHigh) {
            productNew.sort(sortNameModifiedLowToHigh)
         } else {
            productNew.sort(sortNameModifiedHighToLow)
         }
         break
      }
      default : {
        if(isFormLowToHigh) {
            productNew.sort(sortPriceLowToHigh)
        } else {
            productNew.sort(sortPriceHighToLow)
        }
        break
      }
    }
    setStateProductsShowing(productNew)
  }

  const onTextChange = (event) => {
      console.log(event.target.value)
     setText(event.target.value)
  }

  const onFormSearchSubmit = () => {
    setStateProductsShowing(productList.filter(element => {
      if(element.name.includes(textChange)) {
        return element
      }
   }))
   setText("")
  }
  
  console.log(productsShowing)
  return (

    <main>
      {/* shop-area start */}
      {console.log(productsShowing)}
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
                      {productsShowing.map(element  => {
                        return <ProductItem item={element} onAddToCard={onAddToCard}/>
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
                  <form action="#" className="shop-search" onSubmit={onFormSearchSubmit}>
                    <input type="text" placeholder="Your keyword...." onChange={onTextChange}/>
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
                    <li><a href="#" onClick={()=> sortProduct(NAME_SORTING, true)}>Name: A-Z</a></li>
                    <li><a href="#" onClick={()=> sortProduct(NAME_SORTING, false)}>Name: Z-A</a></li>
                    <li><a href="#" onClick={()=> sortProduct(PRICE_SORTING, false)}>Price: High to Low</a></li>
                    <li><a href="#" onClick={()=> sortProduct(PRICE_SORTING, true)}>Price: Low to High</a></li>
                    <li><a href="#" onClick={filterProductTopSale}>Product: Top Sales</a></li>
                  </ul>
                </div>
                <div className="shop-widget">
                  <h3 className="shop-title">Recent Product</h3>
                  {/* <ul className="shop-sidebar-product">
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
                  </ul> */}
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