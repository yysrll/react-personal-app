import React, { useEffect, useMemo, useState } from "react";
import { getUserLogged } from "./utils/network-data";
import UserContext from "./contexts/UserContext";
import Dashboard from "./presentation/pages/DashboardPage";
import AuthRoutes from "./routes/routes";

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
      // alert('Error')
    })
  }, [])


  return (
    <UserContext.Provider value={userContextValue}>
      {
        user ? (
          <Dashboard />
        ) : (
          <AuthRoutes />
        )
      }
    </UserContext.Provider>
  )
}

export default App