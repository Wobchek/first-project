import React from 'react';
import {Route, Routes,} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/news"
                               element={<News/>}/>

                        <Route path="/profile/:userId/"
                               element={<ProfileContainer/>}/>

                        <Route path="/profile/"
                               element={<ProfileContainer/>}/>

                        <Route exact path="/dialogs"
                               element={<DialogsContainer/>}/>

                        <Route path="/settings"
                               element={<Settings/>}/>

                        <Route path="/login"
                               element={<Login/>}/>

                        <Route path="/users"
                               element={<UsersContainer/>}/>

                        <Route path="/friends"
                               element={<Friends/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})
(App);