const UPDATE_NEW_MESSAGE_BODY_TEXT = 'UPDATE-NEW-MESSAGE-BODY-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Von"}, {id: 2, name: "Vorani"},
        {id: 3, name: "Volvo"}, {id: 4, name: "Vorago"},
        {id: 5, name: "Vokanda"},
    ],
    messages: [
        {id: 1, message: "hi, how are you?", avatar: ""},
        {id: 2, message: "Today is friday.", avatar: ""},
        {id: 3, message: "Today is monday.", avatar: ""},
        {id: 4, message: "Good luck.", avatar: ""},
        {id: 5, message: "Happy Birthday.", avatar: ""},
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
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: action.message, avatar: ""}],
            };
        default:
            return state;
    }
}

export const sendMessage = (message) => ({type: SEND_MESSAGE, message});

export default dialogsReducer;