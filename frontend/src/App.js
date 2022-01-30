import React, { useEffect } from 'react'
import './static/css/index.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import SearchBar from './components/layout/SearchBar'
import MainSection from './components/layout/MainSection'
import Footer from './components/layout/Footer'

import { Provider } from 'react-redux'
import store from './components/store'


function App() {

  useEffect(() => {
    // Init Materialize
    M.AutoInit()
  })


  return (
    <Provider store={store}>
      <SearchBar />
      <MainSection />
      <Footer />
    </Provider>
  );
}

export default App;
