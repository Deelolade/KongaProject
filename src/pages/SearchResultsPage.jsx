import React from 'react';
import { useLocation } from 'react-router-dom';
import productCat from '../Api/products'; // Adjust the import path
import SearchResults from './SearchResults';
import Header from '../components/Header'

const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  // Filter products based on the search term
  const filteredResults = productCat.filter(product =>
    product.nameOfProduct.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
     <Header />
      <h2>Search Results for: "{query}"</h2>
      <SearchResults results={filteredResults} />
    </div>
  );
};

export default SearchResultsPage;
