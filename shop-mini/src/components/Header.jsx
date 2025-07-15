function Header({ toggleCart }) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem" }}>
      <h2>ShopMini</h2>
      <button onClick={toggleCart}> Toggle Cart</button>
    </header>
  );
}

export default Header;
