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

function App() {
  return (
      <>
          <Routes>
              <Route path='/' element={<PrivateRoute component={MainPage}/> }>
                  <Route path='/' element={<MainSection/>}/>
                  <Route path='/profile' element={<ProfileSection/>}/>
              </Route>
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/register' element={<RegisterPage/>} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </>
  );
}

export default App;
