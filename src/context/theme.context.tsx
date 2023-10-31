import { ReactNode, createContext, useContext, useState } from 'react'
import themeStl from './theme.module.css'

const ThemeContext=createContext<any>('')

export const useTheme=() => {
    return useContext(ThemeContext)
}

export const Theme=({children}:{children:ReactNode})=>{

    const [theme, setTheme] = useState(true)

    return(
<ThemeContext.Provider 
value={
    {
        theme:theme,
        setTheme
    }
}>
    <div className={theme ? `${themeStl.sun}` : `${themeStl.moon}`}>
    {children}
    </div>
</ThemeContext.Provider>
    )

}


