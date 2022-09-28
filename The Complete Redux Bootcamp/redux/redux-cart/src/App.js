import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Items from './Items';
import cartReducer from './cartReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

function App() {
  const store=createStore(cartReducer)
  return (
    <div className="App">
      <Provider store={store}>
      <NavBar/>
      <Items/>
      </Provider>
    </div>
  );
}

export default App;
