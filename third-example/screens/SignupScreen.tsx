import AuthContent from '../components/Auth/AuthContent';
import {createUser} from "../util/auth";
import {ICredentials} from "../components/Auth/AuthForm";
import {useContext, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import {AuthContext} from "../store/auth-context";

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);

    async function signupHandler({email, password} : ICredentials) {
        setIsAuthenticating(true);
        try {
            const token = await createUser(email, password);
            authCtx.authenticate(token);
        } catch (e) {
            Alert.alert('Authentication failed', 'Check your credentials');
            setIsAuthenticating(false);
        }


    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Creating user..." />
    }

    return <AuthContent isLogin={false} onAuthenticate={signupHandler} />;
}

export default SignupScreen;