import React, { useState } from 'react';
import { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

const hello = {
  color: "white",
  backgroundColor: "purple",
  textAlign: "center",
  padding: "10px",
}
// object declaration
const productsStyle = {
  border: '1px solid red',
  borderRadius: '5px',
  width: '300px',
  float: 'right',
  backgroundColor: 'rgb(93, 155, 134)',
  height: '300px',
  margin: '10px'
}
// array declaration
const productsStyle2 = {
  border: '1px solid red',
  borderRadius: '5px',
  width: '300px',
  float: 'right',
  backgroundColor: 'green',
  height: '300px',
  margin: '10px'
}



function App() {
  const nayoks = ["kamal", "jamal", "fahim", "rahim"]

  const productList = [
    { pName: 'p1', pPrice: 100 },
    { pName: 'p2', pPrice: 300 },
    { pName: 'p3', pPrice: 4000 },
    { pName: 'p4', pPrice: 60 },
  ]
  const productsName = productList.map(product => product.pName)
  console.log(productsName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Movie></Movie>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }

          {
            productList.map(product => <li>{product.pPrice}</li>)
          }
        </ul>

        {/* set attribute and data gulu ke props hisebe pataiye divo*/}
        <Person name={nayoks[0]} age="23" food="fuska"></Person>
        <Person name={nayoks[1]} age="55" food="fresh"></Person>

        {/* products in array */}
        {
          productList.map(product => <Products p={product} > </Products>) // Products components ke daclear kora hoice thn p name ekta property set kora hoice
        }

        {/* <Products product={productList[0]} > </Products>
        <Products product={productList[1]} > </Products>
        <Products product={productList[2]} > </Products>
        <Products product={productList[3]} > </Products> */}
      </header>

    </div >
  );
}

function Movie() {
  const [mCount, setValue] = useState(4)
  const handleClick = () => setValue(mCount + 1)
  return (
    <div>
      <h4>Numbers of Movie : {mCount}</h4>
      <MovieDisplay movies={mCount}></MovieDisplay>
      <button onClick={handleClick}> Add movie</button>
    </div>
  )
}

function MovieDisplay(props) {
  return <h4>i have acted : {props.movies} </h4>
}


//  Load dynamic data, API call useEffect integrate state
function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {   //data load korar jonno useEffect use kora hoyeche
    console.log("calling effect");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>dynamic users : {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}


// Component state hook and set state method
function Counter() {
  let [count, setState] = useState(10);
  // const handleIncrease = () => {
  //   // const newCount = count + 1
  //   // setState(newCount)
  //   setState(count + 1)
  // }
  return (
    <div>
      <h1>count: {count}</h1>
      {/* <button onClick={handleIncrease}>increase</button> */}
      <button onClick={() => setState(count + 1)}>increase</button>
      <button onClick={() => setState(count - 1)}>decrease</button>

    </div>
  )
}

function Products(props) {
  console.log("props ", props);
  const { pName, pPrice } = props.p
  console.log(pName, pPrice);
  return (
    <div style={productsStyle}>
      <div>
        <h4>products Name : {pName}</h4>
        <h4>Price : {pPrice}</h4>
      </div>
    </div>
  )
}



function Person(props) {
  // console.log(props);
  return (
    <div style={{ border: ' 1px solid red', padding: '20px', backgroundColor: 'white', color: 'black', marginBottom: '20px' }}>
      <h1>Name : {props.name}</h1>
      <p>age : {props.age}</p>
    </div>
  )
}



export default App;
