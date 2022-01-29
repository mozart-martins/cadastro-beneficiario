import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getBeneficiarios } from './../../actions/beneficiariosAction'
import LoginCard from './LoginCard'
import Beneficiarios from './../beneficiarios/Beneficiarios'


const MainSection = ({ beneficiario: { beneficiarios, loading }, getBeneficiarios }) => {


    useEffect(() => {
        getBeneficiarios()
        // eslint-disable-next-line
    },[])

    if(beneficiarios !== null && loading === false) 
        return <Beneficiarios />
    else
        return (
                <section id="MainSection">
                    <LoginCard />
                </section>
        )
}


const mapStateToProps = state => ({
    beneficiario: state.beneficiario,
    loading: state.loading
})

export default connect(mapStateToProps, { getBeneficiarios })(MainSection)