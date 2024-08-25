import React from 'react'
// import { Link } from 'react-router-dom'

const SingleProduct = () => {
  return (
    <div>
        <div className="main-product">
            <img src="https://via.placeholder.com/300" alt="Product"/>
            <h2>Product Name</h2>
            <p>Product Description</p>
            <p>$99.99</p>
            <button>Add to Cart</button>
        </div>
        <div className="side-product">
            .upper-side-
        </div>
        <div className="bottom-product">
            <h3>Featured Products</h3>
            <div className="product-list">
                <div className="product">
                    <img src="https://via.placeholder.com/100" alt="Product"/>
                    <h4>Product Name</h4>
                    <p>$99.99</p>
                </div>
                <div className="product">
                    <img src="https://via.placeholder.com/100" alt="Product"/>
                    <h4>Product Name</h4>
                    <p>$99.99</p>
                </div>
                <div className="product">
                    <img src="https://via.placeholder.com/100" alt="Product"/>
                    <h4>Product Name</h4>
                    <p>$99.99</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SingleProduct
