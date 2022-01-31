import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LoginCard from './LoginCard'
import Beneficiarios from './../beneficiarios/Beneficiarios'
import { verifyTokenExist } from './../../actions/tokenActions'
import Preloader from './Preloader'


const MainSection = ({ token: { token, loading }, verifyTokenExist }) => {


    useEffect(() => {
        verifyTokenExist()
        //eslint-disable-next-line
    }, [])

    if (loading === true)
        <Preloader />
    else if(token !== null && token !== undefined && loading === false) 
        return <Beneficiarios />
    else
        return (
            <section id="MainSection">
                <LoginCard />
            </section>
        )
}


const mapStateToProps = state => ({
    token: state.token
})

export default connect(mapStateToProps, { verifyTokenExist })(MainSection)