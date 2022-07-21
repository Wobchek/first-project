const UPDATE_NEW_MESSAGE_BODY_TEXT = 'UPDATE-NEW-MESSAGE-BODY-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Vovan"}, {id: 2, name: "Vor"},
        {id: 3, name: "Volvo"}, {id: 4, name: "Voran"},
        {id: 5, name: "Vokanda"},
    ],
    messages: [
        {id: 1, message: "hi, how are you?", avatar: "https://www.meme-arsenal.com/memes/51c1e33c5df856f8d1c8378d66997c2f.jpg"},
        {id: 2, message: "Today is friday.", avatar: "https://i1.sndcdn.com/artworks-000587383040-jzxjbs-t500x500.jpg"},
        {id: 3, message: "Today is friday.", avatar: "https://i1.sndcdn.com/artworks-000587383040-jzxjbs-t500x500.jpg"},
        {id: 4, message: "No homework today.", avatar: "https://i1.sndcdn.com/artworks-000587383040-jzxjbs-t500x500.jpg"},
        {id: 5, message: "No homework today.", avatar: "https://i1.sndcdn.com/artworks-000587383040-jzxjbs-t500x500.jpg"},
    ],
    newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY_TEXT:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body, avatar: "https://www.meme-arsenal.com/memes/51c1e33c5df856f8d1c8378d66997c2f.jpg"}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY_TEXT, body: body,});

export default dialogsReducer;