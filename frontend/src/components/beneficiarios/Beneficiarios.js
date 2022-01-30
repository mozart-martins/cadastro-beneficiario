import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BeneficiariosList from './BeneficiariosList'
import Preloader from '../layout/Preloader'
import AddBeneficiarioButton from './AddBeneficiarioButton'
import { getBeneficiarios } from './../../actions/beneficiariosAction'


const Beneficiarios = ({ beneficiario: { beneficiarios, loading }, getBeneficiarios }) => {

    useEffect(() => {
        getBeneficiarios()
        // eslint-disable-next-line
    }, [])

    if(loading === true || beneficiarios === null)
        return <Preloader />
    else
        return (
            <div className="container" style={{minHeight: '70vh'}}>
                <h3>Lista de Beneficiários</h3>
                <BeneficiariosList />
                <br />
                <AddBeneficiarioButton />
            </div>
        )
}

const mapStateToProps = state => ({
    beneficiario: state.beneficiario
})

export default connect(mapStateToProps, { getBeneficiarios })(Beneficiarios)