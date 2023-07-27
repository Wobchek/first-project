import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.jpg";


const ProfileInfo = ({profile, status, updateStatusProfile, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    let userContacts = () => {
        let contacts = '';
        let result = [];
        for (let userContacts in profile.contacts) {
            if (profile.contacts[userContacts] != null) {
                contacts = `${Number(userContacts) + 1}: ${profile.contacts[userContacts]}`;
                result.push(profile.contacts.length - 1 != userContacts
                    ? contacts + ", "
                    : contacts + ".");
            }
        }
        return result;
    };

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    console.log(profile.photos.large)
    return (
        <div className={styles.descriptionBlock}>
            <div>{profile.aboutMe}</div>
            <img src={profile.photos.large || userPhoto} className={styles.mainPhoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <ProfileStatus status={status} updateStatusProfile={updateStatusProfile}/>
            Мои контакты :
            <div>{userContacts()}</div>
        </div>
    )
};

export default ProfileInfo;
