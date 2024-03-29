import {profileAPI} from "../api/api";
import field from "../assets/images/basketball_field.jpg";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS_PROFILE = 'SET-STATUS-PROFILE';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialState = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likeCount: 26},
        {id: 2, message: "It`s my first post.", likeCount: 20},
        {id: 3, message: "Du hast!", likeCount: 5000},
    ],
    profile: {
        aboutMe: "Chaker",
        photos: {
            large: field,
            small: field,
        },
        contacts: ["vk.com", "tikitoki"],
    },
    status: "",

};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.postText,
                likeCount: 0,
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}

            };
        }
        default:
            return state;
    }
}

export const addPost = (postText) => ({type: ADD_POST, postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatusProfile = (status) => ({type: SET_STATUS_PROFILE, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(response.data))
};
export const getStatusProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatusProfile(userId)
    dispatch(setStatusProfile(response.data))
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const updateStatusProfile = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatusProfile(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusProfile(status))
    }
};


export default profileReducer;