import './App.css';
import Home from './pages/home';
import { Formpage } from './pages/formpage';
import { Delpage } from './pages/delpage';
import { UpPage } from './pages/updPage';
import {Route, Routes} from 'react-router-dom';
import {UpForm} from './components/upForm';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/formpage' element={<Formpage/>}></Route>
            <Route path='/delpage' element={<Delpage/>}></Route>
            <Route path='/updpage' element={<UpPage/>}></Route>
            <Route path='/updpage/upform' element={<UpForm/>}></Route>
        </Routes>
    </div>
  );
}

export default App;