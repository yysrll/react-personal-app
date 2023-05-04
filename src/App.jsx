import React, { useEffect, useMemo, useState } from "react";
import { getUserLogged } from "./utils/network-data";
import UserContext from "./contexts/UserContext";
import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./presentation/pages/LoginPage";
import RegisterPage from "./presentation/pages/RegisterPage";
import NotFoundPage from "./presentation/pages/NotFoundPage";

function App() {
  const [user, setUser] = useState(null)  

  const userContextValue = useMemo(() => ({
    user,
    setUser
  }), [user])


  useEffect(() => {
    getUserLogged()
      .then((res) => {
        if (!res.error) {
          setUser(res.data)
        } else {
          setUser(null)
        }
      })
      .catch(() => {
        alert('Error')
      })
  })


  return (
    <UserContext.Provider value={userContextValue}>
      <Routes>
            <Route path="/" element={ 
                user ? (
                  <div>
                    <h1>Welcome, {user.name}</h1>
                    <button onClick={() => setUser(null)}>Logout</button>
                  </div>
                ) : (
                  <div>
                    <h1>Welcome, Guest</h1>
                    <Link to="/login">Login dulu</Link>
                  </div>
                )
             } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
            <Route path="/*" element={ <NotFoundPage /> } />
        </Routes>
    </UserContext.Provider>
  )
}

export default App