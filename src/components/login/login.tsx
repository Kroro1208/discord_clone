import { signInWithPopup } from "firebase/auth";
import "./Login.scss"
import { Button } from '@mui/material';
import { auth, provider } from "../../firebase";

export default function Login() {

    const signIn = () => {
        signInWithPopup(auth, provider).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <div className='login'>
            <div className='loginLogo'>
                <img src="/logo192.png" alt="" />
            </div>
            <Button onClick={signIn}>Loginする</Button>
        </div>
    );
}
