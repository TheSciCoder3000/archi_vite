import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import ForgotPassword from '../components/ForgotPassword';
import '../assets/css/Auth.css';
import { GoogleIcon, FacebookIcon } from '../components/CcustomIcons';



export default function Login() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        let isValid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                >
                    Log in
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                    }}
                >
                    <FormControl>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <TextField
                            error={emailError}
                            helperText={emailErrorMessage}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            autoComplete="email"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                            color={emailError ? 'error' : 'primary'}
                            sx={{ ariaLabel: 'email' }}
                        />
                    </FormControl>
                    <FormControl>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Link
                                component="button"
                                onClick={handleClickOpen}
                                variant="body2"
                                sx={{ alignSelf: 'baseline' }}
                            >
                                Forgot your password?
                            </Link>
                        </Box>
                        <TextField
                            error={passwordError}
                            helperText={passwordErrorMessage}
                            name="password"
                            placeholder="••••••"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            required
                            fullWidth
                            variant="outlined"
                            color={passwordError ? 'error' : 'primary'}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <ForgotPassword open={open} handleClose={handleClose} />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={validateInputs}
                    >
                        Sign in
                    </Button>
                    <Typography sx={{ textAlign: 'center' }}>
                        Don&apos;t have an account?{' '}
                        <span>
                            <Link
                                href="/material-ui/getting-started/templates/sign-in/"
                                variant="body2"
                                sx={{ alignSelf: 'center' }}
                            >
                                Sign up
                            </Link>
                        </span>
                    </Typography>
                </Box>
                <Divider>or</Divider>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        onClick={() => alert('Sign in with Google')}
                        startIcon={<GoogleIcon />}
                    >
                        Sign in with Google
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        onClick={() => alert('Sign in with Facebook')}
                        startIcon={<FacebookIcon />}
                    >
                        Sign in with Facebook
                    </Button>
                </Box>
            </div>
        </div>
    );
}