import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Header toggleCart={toggleCart} />
      {showCart && <Cart cart={cart} />}
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
