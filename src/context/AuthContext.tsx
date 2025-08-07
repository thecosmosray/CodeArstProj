import { createContext, useContext, useReducer,  } from "react";
import { initialState, ReducerFunc } from "./AuthReducer";

    const Auth = createContext<{ state: any; dispatch: React.Dispatch<any> } | undefined>(undefined);

    const AuthProvider = ({ children }: { children: React.ReactNode }) => {

        const [state, dispatch] = useReducer(ReducerFunc, initialState);

        return (
            <>
                <Auth.Provider value={{ state, dispatch }}>
                    {children}
                </Auth.Provider>
            </>
        )
    }

    const useAuth = () => {
        const context = useContext(Auth);
        if (!context) {
            throw new Error("useAuth must be used within an AuthProvider");
        }
        return context;
    };

    export { AuthProvider, useAuth, Auth };

