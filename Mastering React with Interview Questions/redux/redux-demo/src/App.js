import logo from './logo.svg';
import './App.css';
import Purchase from './components/Purchase';
import Cart from './components/Cart';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
      <Purchase/>
      <Cart/>
      <Total/>
    </div>
  );
}

export default App;
