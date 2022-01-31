import React, { useState } from 'react'
import { connect } from 'react-redux'
import Logo from './../../static/img/logo_menor.png'
import { searchBeneficiario } from './../../actions/beneficiariosAction'

const SearchBar = ({ beneficiario, searchBeneficiario }) => {


    const onChange = (keys) => {

        if(keys === '')
            beneficiario.filtereds = beneficiario.beneficiarios

        searchBeneficiario(keys)
    }

    return (
        <nav className="yellow accent-2">
        <a href="#!" className="brand-logo left">
            <img className="responsive-img" style={{height: '60px', width: '90px'}} src={Logo} alt="BrasilPrev" />
        </a>
        <div className="nav-wrapper">
        <form className="right  blue darken-4 hide-on-small-only">
            <div className="input-field">
                <input 
                    id="search" 
                    type="search" 
                    required 
                    onChange={ e => onChange(e.target.value) }
                />
                <label className="label-icon" htmlFor="search">
                    <i className="material-icons medium">search</i>
                </label>
            </div>
        </form>
        </div>
    </nav>
    )
}

const mapStateToProps = state => ({
    beneficiario: state.beneficiario
})


export default connect(mapStateToProps, { searchBeneficiario })(SearchBar)


