import React from 'react';
// import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusProfile, getUserProfile, updateStatusProfile} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if(!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatusProfile(userId);

    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
});

export default compose(
    connect(mapStateToProps,{getUserProfile,
        getStatusProfile, updateStatusProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);