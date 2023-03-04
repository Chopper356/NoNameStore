import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Basket from '../../components/Basket';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { initBasket } from '../../store/basketData';
import Home from '../Home';
import Login from '../Login';
import Product from '../Product';
import Registration from '../Registration';
import './app.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initBasket());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Basket />

        <main>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/product/:id" element={<Product />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/registration" element={<Registration />}/>
            </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
