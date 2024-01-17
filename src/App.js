
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import { ShopContextprovider } from './Context/shopContext';


function App() {
  return (
    <div className="App">
      <ShopContextprovider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={< Shop />}></Route>
          <Route path='/Cart' element={< Cart />}></Route>

        </Routes>
      </BrowserRouter>
      </ShopContextprovider>
    </div>
  );
}

export default App;
