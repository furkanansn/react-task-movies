import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import "./App.scss";
function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/movie/:slug' element={<MovieDetails />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
