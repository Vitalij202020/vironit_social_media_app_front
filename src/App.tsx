import React, {useEffect} from 'react';
import './App.css';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route } from 'react-router-dom';
import MainSection from "./components/MainSection";
import ProfileSection from "./components/ProfileSection";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/hoc/PrivateRoute";
import TemporaryDrawer from "./components/TestingComponent";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";

function App() {
    // const {token} = useTypedSelector(state => state.userLogin);
    // const {msg} = useTypedSelector(state => state.global);
    // const {globalClearFields} = useActions();
    //
    // useEffect(() => {
    //     if(token && !!msg) {
    //         setTimeout(() => {
    //             globalClearFields()
    //         }, 4100)
    //     }
    // }, [token, msg])

    return (
        <>
            <Routes>
                <Route path='/' element={<PrivateRoute component={MainPage}/>}>
                    <Route path='/' element={<MainSection/>}/>
                    <Route path='/profile' element={<ProfileSection/>}/>
                </Route>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            {/*<TemporaryDrawer/>*/}
        </>
    );
}

export default App;
