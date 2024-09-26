import React from 'react';
import Footer from '../components/Footer'

const SearchResults = ({ results }) => {
  return (
    
    <div>
      <div className="row">
      {results.length > 0 ? (
        results.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={product.imageUrl} 
                alt={product.nameOfProduct} 
                className="card-img-top" 
                style={{ height: '200px', objectFit: 'contain' }} 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.nameOfProduct}</h5>
                <p className="card-text">{product.description}</p>
                <h6 className="text-danger">{product.price}</h6>
                <button className="btn btn-primary mt-auto">Add to Cart</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12">
          <p className="text-center text-muted mt-4">No results found. Try searching for something else.</p>
        </div>
      )}
    </div>
    <Footer />
    </div>
    

  );
};

export default SearchResults;
