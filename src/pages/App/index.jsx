import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../Home';
import Product from '../Product';
import './app.module.scss';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product/:id" element={<Product />}/>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
