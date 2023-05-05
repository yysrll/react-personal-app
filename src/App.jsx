import React, { useEffect, useMemo, useState } from "react";
import { getUserLogged } from "./utils/network-data";
import UserContext from "./contexts/UserContext";
import Dashboard from "./presentation/pages/DashboardPage";
import AuthRoutes from "./routes/routes";
import LoadingPage from "./presentation/pages/LoadingPage";

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)  

  const userContextValue = useMemo(() => ({
    user,
    setUser
  }), [user])


  useEffect(() => {
    setIsLoading(true)
    getUserLogged()
      .then((res) => {
        if (!res.error) {
          setUser(res.data)
        } else {
          setUser(null)
        }
        setIsLoading(false)
      })
    .catch(() => {
      setUser(null)
      setIsLoading(false)
    })
  }, [])


  return (
    <UserContext.Provider value={userContextValue}>
      {
        isLoading ? (
          <LoadingPage />
        ) :
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