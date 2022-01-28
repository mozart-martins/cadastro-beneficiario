import React from 'react'


const LoginCard = () => {
    return (
        <div id="LoginCard" className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card-panel blue darken-4">
                        <p className="card-title white-text center">
                            Login
                        </p>
                        <div className="input-field col">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="password" type="text" className="validate" />
                            <label for="password">Usuário</label>
                        </div>
                        <div className="input-field col">
                            <i className="material-icons prefix">security</i>
                            <input id="user" type="password" className="validate" />
                            <label for="user">Senha</label>
                        </div>
                        <div className="center">
                            <a className="waves-effect waves-light btn-large blue darken-3">
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


export default LoginCard