function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: "1px solid gray", padding: "1rem", width: "200px", margin: "1rem" }}>
      <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
      <h4>{product.title.slice(0, 25)}...</h4>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
