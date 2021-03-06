import './App.css';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import About from './Pages/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/checkout/:serviceId' element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
