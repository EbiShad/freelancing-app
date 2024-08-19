import { useContext, useEffect } from "react";
import { createContext } from "react";
import useLocalStorageState from "../../Hookes/useLocalStorageState";


const darkModeContext= createContext()

export  function DarkModeProvider({children}){

    const [isDarkMode,setIsDarkMode] = useLocalStorageState("isDarkMode",
    window.matchMedia("(prefers-color-schema : dark)").matches
    )
   

 
      useEffect(() => {
        if(isDarkMode){
           document.documentElement.classList.add("dark-mode");
           document.documentElement.classList.remove("light-mode");
        }else{
         document.documentElement.classList.add("light-mode");
         document.documentElement.classList.remove("dark-mode");
        }
           
         }, [isDarkMode]);
       

    const toggleDarkMode = () =>{
        setIsDarkMode( (prev) => !prev)
    }
       return(
        <darkModeContext.Provider value={{isDarkMode,toggleDarkMode}}>
            {children}
        </darkModeContext.Provider>
       )
}



  export function useDarkMode(){
    const context = useContext(darkModeContext)

    if(context ===undefined) throw Error("DarkModeContext used outside of DarkModeProvider")

    return context
}