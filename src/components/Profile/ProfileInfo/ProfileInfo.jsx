import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let userContacts = () => {
        let contacts = '';
        let result = [];
        for (let userContacts in props.profile.contacts) {
            if (props.profile.contacts[userContacts] != null) {
                contacts = `${Number(userContacts) + 1}: ${props.profile.contacts[userContacts]}`;
                result.push(props.profile.contacts.length - 1 != userContacts
                    ? contacts + ", "
                    : contacts + ".");
            }
        }
        return result;
    };

    return (
        <div className={styles.descriptionBlock}>
            <div>{props.profile.aboutMe}</div>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status={props.status} updateStatusProfile={props.updateStatusProfile}/>
            Мои контакты :
            <div>{userContacts()}</div>
        </div>
    )
};

export default ProfileInfo;
