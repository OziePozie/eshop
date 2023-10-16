import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const CategoryPage = ({ }) => {
    
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const  params  = useParams();
  
  const categoryId = params.categoryId;
  
  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/category/${categoryId}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Ошибка при получении товаров:", error);
      });
  }, [categoryId]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="category-page">
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Цена: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
