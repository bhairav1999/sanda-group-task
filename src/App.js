import logo from './logo.svg';
import './App.css';
import LightTask from './FirstTask/LightTask';
import Shop from './Second task/ShopProduct';
import ShopProduct from './Second task/ShopProduct';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import DefaulFile from './Comp/DefaulFile';

function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path='/' element={<DefaulFile/>}></Route>
    <Route path='/first' element={<LightTask/>}></Route>
    <Route path='/second' element={<ShopProduct/>}></Route>
  </Routes>
</Router>




     {/* <LightTask/> */}
     {/* <ShopProduct/> */}
    </div>
  );
}

export default App;
