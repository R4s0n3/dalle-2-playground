import React from 'react';

import {
  
  Route,
  Routes,
  BrowserRouter

} from 'react-router-dom';

import './App.css';

// import { AuthContext } from './shared/context/auth-context';
// import {useAuth} from './shared/hooks/auth-hook';

import Home from './pages/Home'

function App() {
  // const { token, reset, login, logout, userId } = useAuth();
  let token;
  let routes;
  if (token) {
    routes = (
      <Routes>

        <Route path="/" element={<Home />} />
        {/* <Route path="/*" element={<Page404 />} /> */}
      </Routes>
    );
  } else {
    routes = (
      <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<Auth />} />
        <Route path="/dashboard/*" element={<Auth />} />
        <Route path="/*" element={<Page404 />} /> */}
      </Routes>
    );
  }

  return (
    // <AuthContext.Provider
    // value={{ isLoggedIn: !!token,  token: token, userId: userId, login: login, logout: logout, reset: reset }}  >
  <div className="App">
  <BrowserRouter>
<main>
    {routes}</main>
  </BrowserRouter>
  </div>
    // </AuthContext.Provider>
  );
}

export default App;
