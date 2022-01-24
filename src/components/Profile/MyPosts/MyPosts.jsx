import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        { id: 1, message: "Hi, how are you?", likeCount: 26},
        { id: 2, message: "It`s my first post.", likeCount: 20},
    ];

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likeCount={postsData[0].likeCount} />
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount} />
            </div>
        </div>
    )
};

export default MyPosts;