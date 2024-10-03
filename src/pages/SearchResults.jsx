import React from "react";
import KongaNow from "../Images/KongaNow.png";

const SearchResults = ({ products }) => {

  return (
    <div className="row">
      {products.map((product) => {
        const combinedText = `${product.nameOfProduct} - ${product.description}`;
        const productName =
          combinedText.length > 20
            ? combinedText.substring(0, 20) + "..."
            : combinedText;

        const price = Number(product.price) || 0;
        const discountPercentage = Number(product.discountPercentage) || 0;

        const discountAmount = price * (discountPercentage / 100);
        const discountedPrice = price - discountAmount;

        const totalDeduction = price - discountedPrice;
        return (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm productsShadows">
              <div className="rounded-end-5 start-0 w-75 d-flex position-absolute" style={{ backgroundColor: "#FCDBED" }}>
                <img src={KongaNow} alt="" className="py-1 w-50 ms-2 mt-0" />
              </div>
              <img src={product.imageUrl} alt={product.nameOfProduct} className="card-img-top w-75 mx-auto mt-1" />
              <div className="card-body">
                <h6 className="card-title"> {productName} </h6>
                <strong>₦{discountedPrice.toLocaleString()}</strong>
                <span className="text-muted ms-2">
                  <del>₦{product.price.toLocaleString()}</del>
                </span>
                <span className="text-danger ms-1 bg-danger-subtle fs-9 fw-medium rounded-3"> {"- " + product.discountPercentage}% </span>
                <div className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#33B27B'}}>You save ₦{totalDeduction.toLocaleString()}</small></div>
                <div className="card-text"><small className="fw-medium" style={{fontSize: '12px', color: '#ED017F'}}>Same Day Delivery Lagos</small></div>
                <div className="search-page-button-text text-center" type="button"><button type="button" className="btn">Add to Cart</button></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
