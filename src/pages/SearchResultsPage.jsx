import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import productCat from '../Api/products'; // Adjust the import path
import SearchResults from './SearchResults';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SearchResultsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(productCat);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    let searchResults = productCat;

    if (query) {
      searchResults = searchResults.filter((product) =>
        product.nameOfProduct.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category) {
      searchResults = searchResults.filter((product) =>
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (priceRange) {
      if (priceRange === "low") {
        searchResults = searchResults.filter((product) => product.price <= 50000);
      } else if (priceRange === "medium") {
        searchResults = searchResults.filter((product) => product.price > 50000 && product.price <= 200000);
      } else if (priceRange === "high") {
        searchResults = searchResults.filter((product) => product.price > 200000);
      }
    }

    setFilteredProducts(searchResults);
  }, [query, category, priceRange]);

  const handleCategoryFilter = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handlePriceFilter = (range) => {
    setPriceRange(range);
  };

  const handleSort = (sortType) => {
    let sortedProducts = [...filteredProducts];
    if (sortType === "price-low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "price-high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    else if (sortType === "relevance") {
      sortedProducts.sort((a, b) => a.id - b.id);
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='row mt-5'>
          <div className='container col-md-2'>
            {/* Category and Filter Sidebar */}
            <div className="category-sidebar shadow">
              <h5 data-bs-toggle="collapse" data-bs-target="#categoryCollapse" aria-expanded="false" aria-controls="categoryCollapse" style={{ cursor: 'pointer' }}>
                Browse Categories
              </h5>
              <div className="collapse" id="categoryCollapse">
                <ul className="list-group">
                  <li className="list-group-item" onClick={() => handleCategoryFilter("Computer and Accessories")}>
                    <input type="radio" name="category" checked={category === "Computer and Accessories"} readOnly />
                    Computers and Accessories
                  </li>
                  <li className="list-group-item" onClick={() => handleCategoryFilter("Phone and Tablet")}>
                    <input type="radio" name="category" checked={category === "Phone and Tablet"} readOnly />
                    Phones and Tablets
                  </li>
                  <li className="list-group-item" onClick={() => handleCategoryFilter("Electronics")}>
                    <input type="radio" name="category" checked={category === "Electronics"} readOnly />
                    Electronics
                  </li>
                  <li className="list-group-item" onClick={() => handleCategoryFilter("Konga Fashion")}>
                    <input type="radio" name="category" checked={category === "Konga Fashion"} readOnly />
                    Konga Fashion
                  </li>
                </ul>
              </div>

              <h5 data-bs-toggle="collapse" data-bs-target="#priceCollapse" aria-expanded="false" aria-controls="priceCollapse" style={{ cursor: 'pointer' }} className="mt-4">
                Price
              </h5>
              <div className="collapse" id="priceCollapse">
                <ul className="list-group">
                  <li className="list-group-item" onClick={() => handlePriceFilter("low")}>
                    <input type="radio" name="price" checked={priceRange === "low"} readOnly />
                    ₦0 - ₦50,000
                  </li>
                  <li className="list-group-item" onClick={() => handlePriceFilter("medium")}>
                    <input type="radio" name="price" checked={priceRange === "medium"} readOnly />
                    ₦50,000 - ₦200,000
                  </li>
                  <li className="list-group-item" onClick={() => handlePriceFilter("high")}>
                    <input type="radio" name="price" checked={priceRange === "high"} readOnly />
                    ₦200,000+
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-10'>
            <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Search Results for: {query}</h2>
              <div className='dropdown'>
                <div className='dropdown-toggle' variant="outline-secondary" data-bs-toggle="dropdown" type="button">
                  Sort By
                </div>
                <div className='dropdown-menu'>
                  <div className='dropdown-item' onClick={() => handleSort("relevance")} type="button">
                    Relevance
                  </div>
                  <div className='dropdown-item' onClick={() => handleSort("price-low-to-high")} type="button">
                    Price: Low to High
                  </div>
                  <div className='dropdown-item' onClick={() => handleSort("price-high-to-low")} type="button">
                    Price: High to Low
                  </div>
                </div>
              </div>
            </div>
            <SearchResults products={filteredProducts} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
