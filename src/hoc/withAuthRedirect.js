import {Navigate} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    const redirectFunction = (props) => {
        return (
            !props.isAuth ? <Navigate to="/login"/> : <Component {...props}/>
        )
    }

    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
    });

    let ConnectedAuthRedirectComponent = connect(mapStateToProps,)(redirectFunction);
    return ConnectedAuthRedirectComponent;
}

