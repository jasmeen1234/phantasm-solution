import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { fetchProducts } from '../services/api';
import ProductRow from './ProductRow';

const InventoryList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    loadProducts(currentPage);
  }, [currentPage]);

  const loadProducts = async (page) => {
    const data = await fetchProducts(page + 1, ITEMS_PER_PAGE);
    setProducts(data);
    setTotalPages(Math.ceil(data.total / ITEMS_PER_PAGE)); // Adjust based on API response
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div>
      <h2>Inventory Items</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Unit Price</th>
            <th>In Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={totalPages}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default InventoryList;
