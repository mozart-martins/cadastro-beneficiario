import React from 'react'
import Logo from './../../static/img/logo_menor.png'

const SearchBar = () => {
    return (
        <nav class="yellow accent-2">
        <a href="#!" className="brand-logo left">
            <img className="responsive-img" style={{height: '60px', width: '90px'}} src={Logo} alt="BrasilPrev" />
        </a>
        <div className="nav-wrapper">
        <form className="right  blue darken-4 hide-on-small-only">
            <div className="input-field">
                <input id="search" type="search" required />
                <label className="label-icon" for="search">
                    <i className="material-icons medium">search</i>
                </label>
            </div>
        </form>
        </div>
    </nav>
    )
}

export default SearchBar