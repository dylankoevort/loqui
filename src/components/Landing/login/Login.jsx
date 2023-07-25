import React from 'react';
import { getAuth, signInWithRedirect } from 'firebase/auth';
import { provider } from 'src/firebase';
import { StyledLogin, StyledLoginMain } from './styledComponents';
import { Button } from '@mui/material';
import { QrCode } from 'src/assets';

const Login = () => {
	const handleLogin = () => {
		window.sessionStorage.setItem('fromRedirect', true);
		const auth = getAuth();
		signInWithRedirect(auth, provider);
	};

	return (
		<StyledLogin>
			<StyledLoginMain>
				<div className="left">
					<div className="title">Use not-Whatsapp on your computer</div>
					<div className="steps-text">
						<p>
							1. <strong>Scan</strong> the <strong>QR code</strong> to the right with your <strong>phone</strong>
						</p>

						<p>OR</p>

						<p>
							2. <strong>Sign in</strong> with <strong>Google</strong> below
						</p>
					</div>
					<div className="google-sign-in">
						<span className="button">
							<Button variant="contained" onClick={handleLogin}>
								Sign in with Google
							</Button>
						</span>
					</div>
				</div>
				<div className="right">
					<div className="qr-code">
						<img src={QrCode} alt="QR Code" />
					</div>
				</div>
			</StyledLoginMain>
		</StyledLogin>
	);
};

export default Login;
