import React, {useEffect} from 'react';
import PostsList from "./post/PostsList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import CreatePost from "./post/CreatePost";

const MainSection = () => {
    const {token} = useTypedSelector(state => state.user);
    const {flag} = useTypedSelector(state => state.global);

    const {getAllPosts} = useActions();

    useEffect(() => {
        if(token) {
            getAllPosts()
        }
    }, [token, flag])

    return (
        <>
            <CreatePost/>
            <PostsList/>
        </>
    );
};

export default MainSection;