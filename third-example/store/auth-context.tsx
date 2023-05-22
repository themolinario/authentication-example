import {createContext, useState} from "react";

const initialToken: unknown = '' ;

export const AuthContext = createContext({
    token: initialToken,
    isAuthenticated: false,
    authenticate: (token: string) => {},
    logout: () => {}
});

function AuthContextProvider({children}: {children: any}) {
    const [authToken, setAuthToken] = useState<string | null>();

    function authenticate(token: string) {
        setAuthToken(token);
    }

    function logout() {
        setAuthToken(null);
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;