import {authAPI} from "../api/api";
import {toggleIsFetching} from "./usersReducer";

const SET_USER_PAYLOAD = 'SET-USER-PAYLOAD';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PAYLOAD:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export const setAuthUserPayload = (userId, email, login, isAuth) => ({type: SET_USER_PAYLOAD, payload: {userId, email, login, isAuth}});

export const getAuth = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    return authAPI.getAuth().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserPayload(id, email, login, true));
        }
        dispatch(toggleIsFetching(false));
    });
};

export const login = (email, password, rememberMe, setError) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    return authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuth())
        } else {
            setError("server", {
                // type: "custom",
                message: response.data.messages
            });
        }
        dispatch(toggleIsFetching(false));
    });
};

export const logout = () => (dispatch) => {
    dispatch(toggleIsFetching(true));
    return authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserPayload(null, null, null, false));
        }
        dispatch(toggleIsFetching(false));
    });
};

export default authReducer;