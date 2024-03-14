import "./Login.scss"
import { Button } from '@mui/material';

export default function Login() {
    return (
        <div className='login'>
            <div className='loginLogo'>
                <img src="/logo192.png" alt="" />
            </div>
            <Button>Loginする</Button>
        </div>
    );
}
