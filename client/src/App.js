import './App.css';
import Home from './pages/home';
import { formpage } from './pages/formpage';
import { delpage } from './pages/delpage';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/formpage' element={<formpage/>}></Route>
            <Route path='/delpage' element={<delpage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;