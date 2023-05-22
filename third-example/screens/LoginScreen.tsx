import AuthContent from '../components/Auth/AuthContent';
import {useContext, useState} from "react";
import {ICredentials} from "../components/Auth/AuthForm";
import {login} from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import {AuthContext} from "../store/auth-context";

function LoginScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authCtx = useContext(AuthContext);

    async function signInHandler({email, password} : ICredentials) {
        setIsAuthenticating(true);
        try {
            const token = await login(email, password);
            authCtx.authenticate(token)
        } catch (e) {
            Alert.alert('Authentication failed!', 'Check your credentials');
            setIsAuthenticating(false);
        }


    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Logging in..." />
    }

    return <AuthContent isLogin onAuthenticate={signInHandler}/>;
}

export default LoginScreen;