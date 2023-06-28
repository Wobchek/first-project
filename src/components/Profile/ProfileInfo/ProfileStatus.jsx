import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true);
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusProfile(status);
    };

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        return () => {
            if (setStatus !== status) {
                setStatus(props.status)
            }
        };
    }, []);

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "---"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
            <div>

            </div>
        </div>
    )
};

export default ProfileStatus;
