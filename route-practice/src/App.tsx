import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ProductLayout from './components/Product/ProductLayout';
import ProductList from './components/Product/ProductList';
import NotFound from './components/NotFound';
import ProductDetail from './components/Product/ProductDetail';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="products" element={<ProductLayout />}>
            <Route index element={<ProductList />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
