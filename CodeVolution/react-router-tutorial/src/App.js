import {Routes,Route} from 'react-router-dom';
import About from './allAboutRoutes/1.ConfiguringRoutes/About';
import Home from './allAboutRoutes/1.ConfiguringRoutes/Home';
import NavBar from './allAboutRoutes/2.Link/NavBar';
import NavBarTwo from './allAboutRoutes/3.ActiveLink/NavBarTwo';
import OrderSummary from './allAboutRoutes/4.NavigateProgrammatically/OrderSummary';
import NoMatch from './allAboutRoutes/5.NoMatch/NoMatch';

function App() {
  return (
    <div className="App">
      {/* <NavBar/>*/}
      <NavBarTwo/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </div>
  );
}

export default App;
