import { createContext, Dispatch, SetStateAction, useState } from "react";
interface INITIAL_STATE {
    isSidebarShown: boolean; 
    setSidebarVisibility: Dispatch<SetStateAction<boolean>>; 
}
const INITIAL_STATE: INITIAL_STATE = {
    isSidebarShown: false, 
    setSidebarVisibility: () => {}
}
export const SidebarContext = createContext(INITIAL_STATE)

export function SidebarContextProvider({children} : any){
    const [isSidebarShown, setSidebarVisibility] = useState(false)
   return (
    <SidebarContext.Provider value={{isSidebarShown, setSidebarVisibility}}>
        {children}
    </SidebarContext.Provider>
   )
}