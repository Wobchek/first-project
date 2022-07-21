import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let userContacts = () => {
        let result = '';
        for (let userContacts in props.profile.contacts) {
            if (props.profile.contacts[userContacts] != null) {
                result += " " + userContacts + ": " + props.profile.contacts[userContacts];
            }}
        return result;
    };

    return (
        <div>
            {/*<div>*/}
            {/*    <img src=''/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div>{props.profile.aboutMe}</div>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatusProfile={props.updateStatusProfile} />
                Мои контакты
                <div>{userContacts()}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;
