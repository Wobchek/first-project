import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src='https://img5.goodfon.ru/wallpaper/nbig/a/89/wallpaper-sport-logo-basketball-nba-sacramento-kings-1.jpg' />
                   {props.message}
                    <div>
                        <button>Like {props.likeCount}</button>
                        <button>Dislike</button>
                    </div>
                    <p />
                </div>
            </div>
        </div>
    )
};

export default Post;