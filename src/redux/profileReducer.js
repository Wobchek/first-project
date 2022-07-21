import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS_PROFILE = 'SET-STATUS-PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likeCount: 26},
        {id: 2, message: "It`s my first post.", likeCount: 20},
        {id: 3, message: "Du hast!", likeCount: 5000},
    ],
    newPostText: 'ball-is-life',
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likeCount: 0,
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_STATUS_PROFILE: {
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text,});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getUserProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    });
};

export const setStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status});

export const getStatusProfile = (userId) => (dispatch) => {
    profileAPI.getStatusProfile(userId).then(response => {
        dispatch(setStatusProfile(response.data))
    });
};

export const updateStatusProfile = (status) => (dispatch) => {
    profileAPI.updateStatusProfile(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusProfile(status))
        }
    });
};


export default profileReducer;