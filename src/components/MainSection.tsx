import React, {useEffect} from 'react';
import PostsList from "./post/PostsList";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import CreatePost from "./post/CreatePost";

const MainSection = () => {
    const {token, user} = useTypedSelector(state => state.user);
    const {postFlag, notificationFlag} = useTypedSelector(state => state.global);

    const {getAllPosts, getNotifications, getFriendsRequest} = useActions();

    useEffect(() => {
        if(token) {
            getNotifications()
            getFriendsRequest(user?._id as string)
        }
    }, [token, notificationFlag])

    useEffect(() => {
        if(token) {
            getAllPosts()
        }
    }, [token, postFlag])

    return (
        <>
            <CreatePost/>
            <PostsList/>
        </>
    );
};

export default MainSection;