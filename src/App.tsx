import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route } from 'react-router-dom';
import MainSection from "./components/MainSection";
import ProfileSection from "./components/ProfileSection";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/hoc/PrivateRoute";
import UsersList from "./components/user/UsersList";
import NotificationList from "./components/Notification/NotificationList";
import ProfileUserSection from "./components/ProfileUserSection";
import SearchUsersList from "./components/user/SearchUserList";
import FriendsList from "./components/user/FriendsList";
import ChatPage from "./pages/ChatPage";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<PrivateRoute component={MainPage}/>}>
                    <Route path='/' element={<MainSection/>}/>
                    <Route path='/profile' element={<ProfileSection/>}/>
                    <Route path='/users' element={<UsersList/>}/>
                    <Route path='/friends' element={<FriendsList/>}/>
                    <Route path='/users/search' element={<SearchUsersList/>}/>
                    <Route path='/users/:userId' element={<ProfileUserSection/>}/>
                    <Route path='/notifications' element={<NotificationList/>}/>
                </Route>
                <Route path='/chat' element={<PrivateRoute component={ChatPage}/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
