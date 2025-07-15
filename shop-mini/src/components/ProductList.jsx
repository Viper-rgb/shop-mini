import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Fetching products...");
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched:", data);
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h3>🛍 Products</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
