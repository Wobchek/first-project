import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';
import React from "react";
import {useForm} from "react-hook-form";

const Dialogs = (props) => {
    const {
        register, handleSubmit,
        formState: {isValid}, reset,
    } = useForm(
        {mode: "onBlur"}
    );
    const onSubmit = (data) => {
        props.sendMessage(data.message)
        reset();
    };

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message message={m.message} avatar={m.avatar} key={m.id}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={styles.dialogs__messages}>
                <div>{messageElements}</div>
                {/*<div className={styles.addMessage + ' ' + s.right}>*/}
                {/*    <div><textarea value={newMessageBody}*/}
                {/*                   onChange={onNewMessageChange}*/}
                {/*                   placeholder='Enter your message'></textarea></div>*/}
                {/*    <div><button onClick={onSendMessageClick}>Send</button></div>*/}
                {/*</div>*/}

                <form className={styles.addMessage + ' ' + styles.right} onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="You message..." {...register("message", {required: true})} />
                    <input className={styles.submit} value={"Send"} type="submit" disabled={!isValid}/>
                </form>
            </div>
        </div>
    )
};

export default Dialogs;