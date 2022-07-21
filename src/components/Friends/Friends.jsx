import s from './Friends.module.css';
import FriendList from "./FriendList/FriendList";

const Friends = (props) => {
    return (
        <div className={s.table}>
            <div>
                <FriendList/>
            </div>
            <div>
                <FriendList/>
            </div>
            <div>
                <FriendList/>
            </div>
        </div>
    )
};

export default Friends;