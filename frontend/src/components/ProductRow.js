import React from 'react';

const ProductRow = ({ product }) => (
  <tr>
    <td>{product.title}</td>
    <td>{product.category}</td>
    <td>${product.price}</td>
    <td>{product.stock}</td>
    <td>{product.status}</td>
  </tr>
);

export default ProductRow;
