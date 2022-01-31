import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addBeneficiario } from '../../actions/beneficiariosAction'
import M from 'materialize-css/dist/js/materialize.min.js'



const AddBeneficiarioModal = ({ addBeneficiario}) => {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [estado_civil, setEstadoCivil] = useState('default')
    const [cpf, setCpf] = useState('')
    const [endereco, setEndereco] = useState('')
    const [identidade, setIdentidade] = useState('')
    const [orgao_emissor, setOrgaoExpeditor] = useState('')
    const [data_expedicao, setDataExpedicao] = useState('')


    const onSubmit = () => {

        if (nome === '' || telefone === '' || nascimento === '' || estado_civil === '' || cpf === '' || endereco === '' || identidade === '' || orgao_emissor === '' || data_expedicao === '')
            M.toast({ html:'Por favor, preencha todos os campos.' })
        else {
            const newBeneficiario = {
                nome,
                telefone,
                nascimento,
                estado_civil,
                cpf,
                endereco,
                identidade,
                orgao_emissor,
                data_expedicao
            }
    
            addBeneficiario(newBeneficiario)

            M.toast({ html: 'Beneficiário cadastrado com sucesso.' })
        }
    }


    return (
        <div>
            <div id="add-beneficiario-modal" className="modal bottom-sheet">
                <div className="modal-content">
                    <div className="row">
                        <h4 className="col s10">Adicionar Beneficiário</h4>
                        <span className="col s1">
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat blue darken-4 white-text">Cancelar</a>
                        </span>
                        <span className="col s1">
                            <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat blue darken-4 white-text">Salvar</a>
                        </span>                    
                    </div>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">face</i>
                                    <input 
                                        id="nome" 
                                        type="text" 
                                        className="validate" 
                                        value={nome} 
                                        onChange={ e => setNome(e.target.value) }
                                    />
                                    <label htmlFor="nome">Nome</label>
                                </div>
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">phone</i>
                                    <input 
                                        id="telefone" 
                                        type="tel" 
                                        className="validate"
                                        value={telefone}
                                        onChange={ e => setTelefone(e.target.value) }
                                    />
                                    <label htmlFor="telefone">Telefone</label>
                                </div>
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">date_range</i>
                                    <input 
                                        id="nascimento" 
                                        type="date" 
                                        className="validate" 
                                        value={nascimento}
                                        onChange={ e => setNascimento(e.target.value) }
                                    />
                                    <label htmlFor="nascimento" className="htmlFor">Data de Nascimento</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">phone</i>
                                    <select 
                                        id="estado_civil" 
                                        
                                        value={estado_civil}
                                        onChange={ e => setEstadoCivil(e.target.value) }
                                    >
                                        <option value="default" disabled>Estado Civil</option>
                                        <option value="C">Casado</option>
                                        <option value="S">Solteiro</option>
                                        <option value="D">Divorciado</option>
                                        <option value="A">Amasiado</option>
                                    </select>
                                    <label>Estado Civil</label>
                                </div>
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input 
                                        id="cpf" 
                                        type="text" 
                                        className="validate" 
                                        value={cpf}
                                        onChange={ e => setCpf(e.target.value) }
                                    />
                                    <label htmlFor="cpf">CPF</label>
                                </div>
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">home</i>
                                    <input 
                                        id="endereco" 
                                        type="text" 
                                        className="validate" 
                                        value={endereco}
                                        onChange={ e => setEndereco(e.target.value) }
                                    />
                                    <label htmlFor="endereco">Endereço</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input 
                                        id="identidade" 
                                        type="text" 
                                        className="validate" 
                                        value={identidade}
                                        onChange={ e => setIdentidade(e.target.value) }
                                    />
                                    <label htmlFor="identidade">Identidade</label>
                                </div>
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">business</i>
                                    <input 
                                        id="orgao_emissor" 
                                        type="text" 
                                        className="validate" 
                                        value={orgao_emissor}
                                        onChange={ e => setOrgaoExpeditor(e.target.value) }
                                    />
                                    <label htmlFor="orgao_emissor">Órgão Emissor</label>
                                </div>
                                <div className="input-field col s4">
                                    <i className="material-icons prefix">date_range</i>
                                    <input 
                                        id="data_expedicao" 
                                        type="date" 
                                        className="validate" 
                                        value={data_expedicao}
                                        onChange={ e => setDataExpedicao(e.target.value) }
                                    />
                                    <label htmlFor="data_expedicao">Data de Expedição</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(null, { addBeneficiario })(AddBeneficiarioModal)