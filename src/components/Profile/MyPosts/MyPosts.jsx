import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {useForm} from "react-hook-form";

const MyPosts = (props) => {
    const {
        register, handleSubmit,
        formState: {isValid}, reset,
    } = useForm(
        {mode: "onBlur"}
    );
    const onSubmit = (data) => {
        props.addPost(data.post)
        reset();
    };

    let postsElements =
        props.postsData.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id}/>);

    return (
        <div className={styles.postsBlock}>
            <h1>My posts</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <textarea placeholder="You post text..." {...register("post", {required: true})} />
                <input className={styles.form_submit} value={"Add post"} type="submit" disabled={!isValid}/>
            </form>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;