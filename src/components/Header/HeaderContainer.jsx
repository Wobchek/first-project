import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {logout, setAuthUserPayload} from "../../redux/authReducer";

const HeaderContainer = (props) => {
        return (
            <Header isAuth={props.isAuth} login={props.login} setAuthUserPayload={props.setAuthUserPayload} logout={props.logout}/>
        )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})
export default connect(mapStateToProps, {setAuthUserPayload, logout}) (HeaderContainer);