import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductList from './components/ProductList/ProductList'

let productList  = [
  {
    category : 'Nội thất',
    name : "Ghế sofa",
    price : "250$",
    finalPrice : "150$"
  },
  {
    category : 'Nội thất',
    name : "Bàn không ngăn",
    price : "250$",
    finalPrice : "150$"
  },
  {
    category : 'Nội thất',
    name : "Ghế xoay",
    price : "250$",
    finalPrice : "150$"
  },
  {
    category : 'Nội thất',
    name : "Tủ Tivi",
    price : "250$",
    finalPrice : "150$"
  }
];

function App() {
  return (
    <React.Fragment>
      <Header />
      <ProductList productList = {productList}/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
