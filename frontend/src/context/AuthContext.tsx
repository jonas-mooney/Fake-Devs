import { ReactNode, createContext, useReducer } from "react";

export const AuthContext = createContext(null)

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        default:
            return state
    }
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    console.log('AuthContext state: ', state)

    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}