import React from 'react';
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CategoryPage from './pages/CategoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminPanel from './pages/AdminPanel';
import EditCategory from './components/admin/category/EditCategory';

//<Route path="/admin/edit-product" element={<AddCategory/>} />

function App() {
    return (
      <>
      <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route exact path="/" element={<Home/>} />
                <Route path="/category/:categoryId" element={<CategoryPage/>} />
                <Route path="/admin" element={<AdminPanel/>} />
                <Route path="/admin/edit-category" element={<EditCategory/>} />
            
                
               
              </Routes>
        </BrowserRouter>
      <Footer />
        </>
       
    );
}

export default App;
