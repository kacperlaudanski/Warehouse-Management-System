import { createContext, useEffect, useReducer } from "react";
import { AuthReducer, InitialContext } from "./auth-reducer";

const INITIAL_STATE : InitialContext = {
  currentUser: JSON.parse(localStorage.getItem('user') as string)||null,
  dispatch: () => {}
}

export const AuthContext = createContext(INITIAL_STATE); 
export const AuthContextProvider = ({children}: any) => {
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