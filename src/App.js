import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.container'
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList.container'
import LoginForm from './components/Login/Login.container'
import RegisterForm from './components/Register/RegisterForm'
import ProductDetail from './components/ProductDetail/ProductDetail.container'
import CartForm from './components/Cart/Cart.container'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import firebaseApp from './firebase';
import PrivateRouter from './components/PrivateRouter'

function LoginPage() {
  return (
    <LoginForm />
  )
}

function PageNotFound() {
  return (
    <>
      <h1>404 nè</h1>
      <h1>404 nè</h1>
      <h1>404 nè</h1>
    </>
  )
}

function Register() {
  return (
    <RegisterForm />
  )
}

function App() {

  const [ arrayProductOrderCard, setArrayProductOrderCard ] = useState([])
  const [productList, setProductList] = useState([])
  const [isAuthenticated, onSignIn] = useState(false)
  
  const onAddToCard = (product) => {
    setArrayProductOrderCard([...arrayProductOrderCard, product])
  }

  const onRemoveItemFromCard = (product) => {
    const productListAfterDeleted = arrayProductOrderCard.filter(element =>  element.productId !== product.productId)
    setArrayProductOrderCard(productListAfterDeleted)
  }

  function getProductList() {
    fetch("https://mapi.sendo.vn/mob/product/cat/ao-so-mi-nam?p=1")
    .then(result => result.json())
    .then(products => {
      console.log(products)
        setProductList(products.data)
    })
  }
  
  return (
    // <React.Fragment>
      <BrowserRouter>
        <Header arrayProductOrderCard={arrayProductOrderCard} onRemoveItemFromCard={onRemoveItemFromCard} />
        <Switch>
          {/* <ProductList productList={productList} onAddToCard={onAddToCard}/> */}
          {/* <LoginForm /> */}
          {/* <RegisterForm /> */}
          <Route path="/" exact render={()=>(
              <ProductList getProductList={getProductList} productList={productList} onAddToCard={onAddToCard}/>
          )} />
          <Route path="/login" component={LoginPage}/>
          {/* <Route path="/detail/:id" render= {()=>(
              <ProductDetail productList={productList}/>
          )}/> */}
            <Route path='/cart' render= {(props) => (<CartForm {...props} />)}  />
               <Route path="/detail/:id"
                render = {(propsOfRouter) => (
                  <ProductDetail {...propsOfRouter}/>
                )}
               />
          {/* <PrivateRouter 
              path="/detail/:id"
              render = {(propsOfRouter) => (
                <ProductDetail productList={productList} {...propsOfRouter}/>
              )}/>
          /> */}
          <Route path='/register' component={Register} />
          <Route component={PageNotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    // </React.Fragment>
  );

}

export default App;
