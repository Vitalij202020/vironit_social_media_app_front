import React, {useEffect} from 'react';
import PostsList from "./post/PostsList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import CreatePost from "./post/CreatePost";

const MainSection = () => {
    const {user, token} = useTypedSelector(state => state.userLogin);
    const {postLike, comment} = useTypedSelector(state => state);
    const {post} = useTypedSelector(state => state.postCreate);

    const {getAllPosts} = useActions();

    useEffect(() => {
        if(token) {
            getAllPosts()
        }
    }, [token, postLike.success, comment.success, post])
    return (
        <>
            <CreatePost/>
            <PostsList/>
        </>
    );
};

export default MainSection;