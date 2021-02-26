import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const hello = {
    color: "white",
    backgroundColor: "purple",
    textAlign: "center",
    padding: "10px",
}

const nameOf = ["kamal", "jamal"]

const productList = {
    id1: { pName: 'watch', pPrice: 100 },
    id2: { pName: 'phone', pPrice: 300 },
    id3: { pName: 'laptop', pPrice: 4000 },
    id4: { pName: 'light', pPrice: 60 },

}



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{
                    color: "white",
                    backgroundColor: "purple",
                    textAlign: "center",
                    padding: "10px",

                }}>my p = {2 + 5}</p>
                <h4 style={hello}>hello world</h4>
                {/* set attribute and data gulu ke props hisebe pataiye divo*/}
                <Person name={nameOf[0]} age="23" food="fuska"></Person>
                <Person name={nameOf[1]} age="55" food="fresh"></Person>
                {/* pName={productList.id1.pName} => dynamic data
                    name = "ashik" => static data
                */}

                {/* products in object */}
                <Products pName={productList.id1.pName} pPrice={productList.id1.pPrice}></Products>
                <Products pName={productList.id2.pName} pPrice={productList.id2.pPrice}></Products>
                <Products pName={productList.id3.pName} pPrice={productList.id3.pPrice}></Products>
                <Products pName={productList.id4.pName} pPrice={productList.id4.pPrice}></Products>

                {/* products in array */}
                <Products2 product={productList2[0]} > </Products2>
                <Products2 product={productList2[1]} > </Products2>
                <Products2 product={productList2[2]} > </Products2>
                <Products2 product={productList2[3]} > </Products2>
            </header>

        </div>
    );
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
function Products(props) {
    return (
        <div style={productsStyle}>
            <div>
                <h1>products Name : {props.pName}</h1>
                <h4>Price : {props.pPrice}</h4>
            </div>
        </div>
    )
}

const productList2 = [
    { pName: 'p1', pPrice: 100 },
    { pName: 'p2', pPrice: 300 },
    { pName: 'p3', pPrice: 4000 },
    { pName: 'p4', pPrice: 60 },
]
console.log(productList2[0].pName);
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

function Products2(props) {
    const { pName, pPrice } = props.product
    console.log(pName, pPrice);
    return (
        <div style={productsStyle2}>
            <h1>products 2 :</h1><hr />
            <div>
                <h1>products2 Name : {pName}</h1>
                <h4>Price2 : {pPrice}</h4>
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
