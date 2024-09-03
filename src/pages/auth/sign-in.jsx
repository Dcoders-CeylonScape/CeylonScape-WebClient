import { useSelector } from "react-redux";
import Button from '@mui/material/Button';

function SignIn(){
    const user = useSelector(state => state.user.data.user);

    return (
        <div>
            <h1 className={'text-3xl text-yellow-300'}>Sign In</h1>

            <div>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>

            <Button variant="contained">Contained</Button>
        </div>
    )
}

export default SignIn;