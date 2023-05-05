import React, { useEffect, useMemo, useState } from "react";
import { getUserLogged } from "./utils/network-data";
import { UserProvider } from "./contexts/UserContext";
import Dashboard from "./presentation/pages/DashboardPage";
import AuthRoutes from "./routes/routes";
import LoadingPage from "./presentation/pages/LoadingPage";
import useTheme from "./hooks/useTheme";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)  
  const [theme, toggleTheme] = useTheme()

  const userContextValue = useMemo(() => ({
    user,
    setUser
  }), [user])

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme])


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

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])


  return (
    <ThemeProvider value={themeContextValue}>
      <UserProvider value={userContextValue}>
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
      </UserProvider>
    </ThemeProvider>
  )
}

export default App