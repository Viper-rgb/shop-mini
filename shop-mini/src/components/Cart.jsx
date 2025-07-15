function Cart({ cart }) {
  return (
    <div style={{ padding: "1rem", borderTop: "2px solid black" }}>
      <h3>🛒 Cart ({cart.length} items)</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title.slice(0, 30)} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
