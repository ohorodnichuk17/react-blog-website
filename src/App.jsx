import './App.css'
import Home from "./pages/Home";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
      <>
          <div className='p-[20px]'>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/blog-detail/:id" element={<BlogDetail/>}></Route>

              </Routes>

          </div>
          {/* Footer */}
          <Footer/>
      </>
  );
}

export default App
