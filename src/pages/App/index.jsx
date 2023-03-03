import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../Home';
import Login from '../Login';
import Product from '../Product';
import Registration from '../Registration';
import './app.module.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <main>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/product/:id" element={<Product />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/registration" element={<Registration />}/>
            </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
