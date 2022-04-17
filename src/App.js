import './App.css';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
