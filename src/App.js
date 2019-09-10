import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'
import LoginForm from './components/Login/Login'
import RegisterForm from './components/Register/RegisterForm'

let productList  = [
  {
    productId : 1,
    category : 'Nội thất 1',
    name : "Ghế sofa",
    price : 250,
    finalPrice : 150,
    total : 0,
    isTopSale : false
  },
  {
    productId : 2,
    category : 'Nội thất 2',
    name : "Bàn không ngăn",
    price : 250*2,
    finalPrice : 150*2,
    total : 0,
    isTopSale : false
  },
  {
    productId : 3,
    category : 'Nội thất 3',
    name : "Ghế xoay",
    price : 250*3,
    finalPrice : 150*3,
    total : 0,
    isTopSale : true
  },
  {
    productId : 4,
    category : 'Nội thất 4',
    name : "Tủ Tivi",
    price : 250*4,
    finalPrice : 150*4,
    total : 0,
    isTopSale : false
  },
  {
    productId : 5,
    category : 'Nội thất 5',
    name : "Ghế sofa",
    price : 250*5,
    finalPrice : 150*5,
    total : 0,
    isTopSale : false
  },
  {
    productId : 6,
    category : 'Nội thất 6',
    name : "Bàn không ngăn",
    price : 250*6,
    finalPrice : 150*6,
    total : 0,
    isTopSale : false
  },
  {
    productId : 7,
    category : 'Nội thất 7',
    name : "Ghế xoay",
    price : 250*7,
    finalPrice : 150*7,
    total : 0,
    isTopSale : true
  },
  {
    productId : 8,
    category : 'Nội thất 8',
    name : "Tủ Tivi",
    price : 250*8,
    finalPrice : 150*8,
    total : 0,
    isTopSale : false
  },
  {
    productId : 9,
    category : 'Nội thất 9',
    name : "Ghế sofa",
    price : 250*8,
    finalPrice : 150*8,
    total : 0,
    isTopSale : false
  },
  {
    productId : 10,
    category : 'Nội thất 10',
    name : "Bàn không ngăn",
    price : 250*9,
    finalPrice : 150*9,
    total : 0,
    isTopSale : true
  },
  {
    productId : 11,
    category : 'Nội thất 11',
    name : "Ghế xoay",
    price : 250*20,
    finalPrice : 150*20,
    total : 0,
    isTopSale : false
  },
  {
    productId : 12,
    category : 'Nội thất 12',
    name : "Tủ Tivi",
    price : 250*15,
    finalPrice : 150*15,
    total : 0,
    isTopSale : false
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
      <ProductList productList={productList} onAddToCard={onAddToCard}/>
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      <Footer/>
    </React.Fragment>
  );

}

export default App;
