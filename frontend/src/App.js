import React from 'react'
import './static/css/index.css'

import SearchBar from './components/layout/SearchBar'
import MainSection from './components/layout/MainSection'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div>
      <SearchBar />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
