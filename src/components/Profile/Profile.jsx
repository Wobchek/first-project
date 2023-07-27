// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} isOwner={props.isOwner}
                         updateStatusProfile={props.updateStatusProfile} savePhoto={props.savePhoto}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile