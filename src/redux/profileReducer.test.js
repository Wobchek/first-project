import profileReducer, {addPost} from "./profileReducer";

let state = {
    postsData: [
        {id: 1, message: "Hi, how are you?", likeCount: 26},
        {id: 2, message: "It`s my first post.", likeCount: 20},
        {id: 3, message: "Du hast!", likeCount: 5000},
    ],
};

test('length postData should be equals 4', () => {
    let action = addPost("unit test profileReducer");
    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(4);
});

test('message should be "unit test profileReducer"', () => {
    let action = addPost("unit test profileReducer");
    let newState = profileReducer(state, action);

    expect(newState.postsData[3].message).toBe("unit test profileReducer");
});

