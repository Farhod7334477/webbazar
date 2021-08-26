import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main/Main';
import Shop from './Components/Shop/Shop';
import Footer from './Components/Footer/Footer';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import { commerce } from './lib/commerce';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Searching from './Components/searchElement/Searching';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState({});
  const [category, setCategory] = useState([]);
  const [search, setsearch] = useState([]);

  const [textInput, setTextInput] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });
    setProduct(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddCart = async (product_id, quantity) => {
    const { cart } = await commerce.cart.add(product_id, quantity);
    setCart(cart);
  };

  const handleUpdateQ = async (product_id, quantity) => {
    const { cart } = await commerce.cart.update(product_id, { quantity });
    setCart(cart);
  };

  const handleRemoveCartItem = async (product_id) => {
    const { cart } = await commerce.cart.remove(product_id);
    setCart(cart);
  };

  const handleEmptyCard = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  const handleCategory = async () => {
    const { data } = await commerce.categories.list();
    setCategory(data);
  };

  const handleSearchCard = async (product) => {
    const { data } = await commerce.products.list({ query: product });
    setsearch(data);
  };

  const handleClickInp = () => {
    handleSearchCard(textInput);
    setsearch(search.data);
  };

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    handleSearchCard();
    handleCategory();
    Aos.init({ duration: 1500, once: true });
  }, []);
  console.log(product);
  return (
    <>
      <Router>
        <Header
          data-aos="fade-left"
          totalItem={cart.total_items}
          handleChange={handleChange}
          handleClickInp={handleClickInp}
        />
        <main>
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/product/:id">
              <ProductDetail addCart={handleAddCart} products={product} />
            </Route>

            <Route path="/search">
              <Searching searchElementData={search} addCart={handleAddCart} />
            </Route>

            <Route path="/cart">
              <Cart
                handleUpdateQ={handleUpdateQ}
                handleRemoveCartItem={handleRemoveCartItem}
                handleEmptyCard={handleEmptyCard}
                cart={cart}
              />
            </Route>

            <Route path="/shop">
              <Shop
                category={category}
                addCart={handleAddCart}
                products={product}
              />
            </Route>
            <Route path="/">
              <Main addCart={handleAddCart} products={product} />
            </Route>
          </Switch>
        </main>

        <footer data-aos="fade-up">
          <Footer products={product} />
        </footer>
      </Router>
    </>
  );
}

export default App;
