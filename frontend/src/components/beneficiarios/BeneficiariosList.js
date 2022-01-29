import React from 'react'
import { connect } from 'react-redux'
import BeneficiarioItem from './BeneficiarioItem'


const BeneficiariosList = ({ beneficiario: { beneficiarios } }) => {
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
                    { beneficiarios !== null ? beneficiarios.map( beneficiario => 
                       <BeneficiarioItem key={beneficiario.pk} beneficiario={beneficiario} /> 
                    ) : <p>Não há beneficiários cadastrados...</p>}
                </tbody>
        </table>
        </div>
    )
}


const mapStateToProps = state => ({
    beneficiario: state.beneficiario
})


export default connect(mapStateToProps)(BeneficiariosList)