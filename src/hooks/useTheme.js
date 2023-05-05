import { useEffect, useState } from "react";

function useTheme() {
    const [theme, setTheme] = useState(localStorage.theme || 'dark')
    
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme', newTheme)
            return newTheme
        })
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])


    return [theme, toggleTheme]
}

export default useTheme