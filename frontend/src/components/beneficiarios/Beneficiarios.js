import React from 'react'
import { connect } from 'react-redux'
import BeneficiariosList from './BeneficiariosList'
import Preloader from '../layout/Preloader'
import AddBeneficiarioButton from './AddBeneficiarioButton'


const Beneficiarios = ({ beneficiario: { beneficiarios } }) => {
    return (
        <div class="container" style={{minHeight: '70vh'}}>
            <h3>Lista de Beneficiários</h3>
            { beneficiarios !== null ? <BeneficiariosList /> :  <Preloader /> }
            <br />
            <AddBeneficiarioButton />
        </div>
    )
}

const mapStateToProps = state => ({
    beneficiario: state.beneficiario
})

export default connect(mapStateToProps)(Beneficiarios)