import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {

    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you?", likeCount: 26},
                {id: 2, message: "It`s my first post.", likeCount: 20},
                {id: 3, message: "Du hast!", likeCount: 5000},
            ],
            newPostText: 'ball-is-life',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Vovan"},
                {id: 2, name: "Vor"},
                {id: 3, name: "Volvo"},
                {id: 4, name: "Voran"},
                {id: 5, name: "Vokanda"},
            ],
            messages: [
                {
                    id: 1,
                    message: "hi, how are you?",
                    //avatar: "https://www.meme-arsenal.com/memes/51c1e33c5df856f8d1c8378d66997c2f.jpg" avatar for me
                },
                {
                    id: 2,
                    message: "Today is friday.",
                    // avatar: "https://i1.sndcdn.com/artworks-000587383040-jzxjbs-t500x500.jpg"
                },
                {
                    id: 3,
                    message: "Today is friday.",
                },
                {
                    id: 4,
                    message: "No homework today.",
                },
                {
                    id: 5,
                    message: "No homework today.",
                },
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;