import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
interface INITIAL_STATE {
    isSidebarShown: boolean; 
    setSidebarVisibility: Dispatch<SetStateAction<boolean>>; 
}
interface ContextProvider{
  children: ReactNode; 
}
const INITIAL_STATE: INITIAL_STATE = {
    isSidebarShown: false, 
    setSidebarVisibility: () => {}
}
export const SidebarContext = createContext(INITIAL_STATE)

export function SidebarContextProvider({children} : ContextProvider){
    const [isSidebarShown, setSidebarVisibility] = useState(false)
   return (
    <SidebarContext.Provider value={{isSidebarShown, setSidebarVisibility}}>
        {children}
    </SidebarContext.Provider>
   )
}