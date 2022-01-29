import React from 'react'
import Moment from 'react-moment'


const BeneficiarioItem = ({ beneficiario }) => {
    // console.log(beneficiario)
    const { cpf, data_expedicao, endereco, estado_civil, identidade, nascimento, nome, orgao_expeditor } = beneficiario

    return (
        <tr>
            <td>{cpf}</td>
            <td>{identidade} {orgao_expeditor}</td>
            <td><Moment format="DD/MM/YYYY">{data_expedicao}</Moment></td>
            <td><Moment format="DD/MM/YYYY">{nascimento}</Moment></td>
            <td>{nome}</td>
        </tr>
    )
}


export default BeneficiarioItem