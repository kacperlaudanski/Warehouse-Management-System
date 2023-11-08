import { createContext, ReactNode, useEffect, useReducer } from "react";
import { AuthReducer, InitialContext } from "./auth-reducer";

const INITIAL_STATE : InitialContext = {
  currentUser: JSON.parse(localStorage.getItem('user') as string)||null,
  dispatch: () => {}
}

interface ContextProvider{
  children: ReactNode
}

export const AuthContext = createContext(INITIAL_STATE); 
export const AuthContextProvider = ({children}: ContextProvider) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE); 
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.currentUser)); 
  }, [state.currentUser])
  
  return (
    <AuthContext.Provider value={{currentUser: state.currentUser, dispatch}}>
       {children}
    </AuthContext.Provider>
  )
}