// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatusProfile={props.updateStatusProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile