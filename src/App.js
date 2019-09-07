import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'
import Login from './components/Login/Login'

let productList  = [
  {
    productId : 1,
    category : 'Nội thất',
    name : "Ghế sofa",
    price : 250,
    finalPrice : 150,
    total : 0
  },
  {
    productId : 2,
    category : 'Nội thất',
    name : "Bàn không ngăn",
    price : 250,
    finalPrice : 150,
    total : 0
  },
  {
    productId : 3,
    category : 'Nội thất',
    name : "Ghế xoay",
    price : 250,
    finalPrice : 150,
    total : 0
  },
  {
    productId : 4,
    category : 'Nội thất',
    name : "Tủ Tivi",
    price : 250,
    finalPrice : 150,
    total : 0
  }
];

function App() {

  const [ arrayProductOrderCard, setArrayProductOrderCard ] = useState([])

  const onAddToCard = (product) => {
    setArrayProductOrderCard([...arrayProductOrderCard, product])
  }

  const onRemoveItemFromCard = (product) => {
    const productListAfterDeleted = arrayProductOrderCard.filter(element =>  element.productId !== product.productId)
    setArrayProductOrderCard(productListAfterDeleted)
  }

  return (
    <React.Fragment>
      <Header arrayProductOrderCard={arrayProductOrderCard} onRemoveItemFromCard={onRemoveItemFromCard} />
      {/* <ProductList productList={productList} onAddToCard={onAddToCard}/> */}
      <Login />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
