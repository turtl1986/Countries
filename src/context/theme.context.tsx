import { ReactNode, createContext, useContext, useLayoutEffect, useState } from 'react'
import themeStl from './theme.module.css'

type ThemeContextType = {
    theme: 'light' | 'moon',
    changeTheme: () => void
   } 

const ThemeContext=createContext<ThemeContextType>({ theme: 'light', changeTheme: () => {}})

export const useTheme=() => {
    return useContext(ThemeContext)
}

export const Theme=({children}:{children:ReactNode})=>{

    const [theme, setTheme] = useState<'light'|'moon'>('light')

    useLayoutEffect(() => {
        const root = window.document.documentElement
        root.setAttribute('data-theme', theme)
       }, [theme])

       const changeTheme = () => {
        setTheme(prev => prev === 'light' ? 'moon' : 'light')
       }

       return <ThemeContext.Provider value={{
        theme,
        changeTheme
       }}>{children}</ThemeContext.Provider>

}


