/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsTicker from './components/NewsTicker';
import Home from './pages/Home';
import Article from './pages/Article';

function ScrollToTop() {
  const { pathname, search } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <NewsTicker />
        <Header />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
