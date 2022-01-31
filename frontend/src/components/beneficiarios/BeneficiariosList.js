import React from 'react'
import { connect } from 'react-redux'
import BeneficiarioItem from './BeneficiarioItem'


const BeneficiariosList = ({ beneficiario: { beneficiarios, filtereds, loading } }) => {
    if (beneficiarios !== null && loading === false)
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>CPF</th>
                            <th>Identidade / Expeditor</th>
                            <th>Expedição</th>
                            <th>Nascimento</th>
                            <th>Nome</th>
                        </tr>
                    </thead>

                    <tbody>
                        { filtereds !== null ? 
                            filtereds.map( beneficiario => 
                                <BeneficiarioItem key={beneficiario.pk} beneficiario={beneficiario} /> 
                            )
                        : beneficiarios.map( beneficiario => 
                            <BeneficiarioItem key={beneficiario.pk} beneficiario={beneficiario} /> 
                        ) }
                    </tbody>
            </table>
            </div>
        )
    else
        return <h3>Não há beneficiários cadastrados...</h3>
}


const mapStateToProps = state => ({
    beneficiario: state.beneficiario
})


export default connect(mapStateToProps)(BeneficiariosList)