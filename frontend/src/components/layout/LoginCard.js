import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { getAuthToken } from './../../actions/tokenActions'


const LoginCard = ({ getAuthToken }) => {
    
    const userEl = useRef(null)
    const passwordEl = useRef(null)

    const onClick = () => {
        getAuthToken(userEl.current.value, passwordEl.current.value)
    }


    return (
        <div id="LoginCard" className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel blue darken-4">
                        <p className="card-title white-text center">
                            Cadastro de Beneficiários
                        </p>
                        <div className="input-field col">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="password-el" ref={userEl} type="text" className="validate" />
                            <label htmlFor="password">Usuário</label>
                        </div>
                        <div className="input-field col">
                            <i className="material-icons prefix">security</i>
                            <input id="user-el" ref={passwordEl} type="password" className="validate" />
                            <label htmlFor="user">Senha</label>
                        </div>
                        <div className="center">
                            <a onClick={onClick} className="waves-effect waves-light btn-large blue darken-3">
                                <i className="material-icons left">vpn_key</i>
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default connect(null, { getAuthToken })(LoginCard)