import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const firebaseConfig = {
	// apiKey: import.meta.env.VITE_apiKey,
	// authDomain: import.meta.env.VITE_authDomain,
	// projectId: import.meta.env.VITE_projectId,
	// storageBucket: import.meta.env.VITE_storageBucket,
	// messagingSenderId: import.meta.env.VITE_messagingSenderId,
	// appId: import.meta.env.VITE_appId,
	// measurementId: import.meta.env.VITE_measurementId
	apiKey: 'AIzaSyAV7om_uCO6C9zue0YKh82EkNTLyb08P1A',
	authDomain: 'loqui-385d8.firebaseapp.com',
	projectId: 'loqui-385d8',
	storageBucket: 'loqui-385d8.appspot.com',
	messagingSenderId: '163232009',
	appId: '1:163232009:web:922e8c3a35ccab6ec5bbd8',
	measurementId: 'G-JVRPG74Y2Y'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, provider, db, analytics };
export default getFirestore();
