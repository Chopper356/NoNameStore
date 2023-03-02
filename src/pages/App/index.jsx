import Header from '../../components/Header';
import Home from '../Home';
import './app.module.scss';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
