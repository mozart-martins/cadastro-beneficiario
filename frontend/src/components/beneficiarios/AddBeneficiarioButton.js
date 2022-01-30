import React from "react"


const AddBeneficiarioButton = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-beneficiario-modal" className="btn-floating modal-trigger btn-large waves-effect waves-light blue darken-4">
                <i className="material-icons">add</i>
            </a>
            <ul>
                <li>
                    <a href="#logout" className="btn-floating modal-trigger red">
                        <i className="material-icons">eject</i>
                    </a>
                </li>
                <li>
                    <a href="#add-tech-modal" className="btn-floating red modal-trigger">
                        <i className="material-icons">
                            person_add
                        </i>
                    </a>
                </li>
            </ul>
        </div>
    )
}


export default AddBeneficiarioButton