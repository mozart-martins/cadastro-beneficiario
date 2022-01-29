import React from 'react'
import './static/css/index.css'

import SearchBar from './components/layout/SearchBar'
import MainSection from './components/layout/MainSection'
import Footer from './components/layout/Footer'

import { Provider } from 'react-redux'
import store from './components/store'


function App() {
  return (
    <Provider store={store}>
      <SearchBar />
      <MainSection />
      <Footer />
    </Provider>
  );
}

export default App;
