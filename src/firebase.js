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
	apiKey: 'AIzaSyBF-_R0G6FgJtD38daU3fr8SozHpgkasGw',
	authDomain: 'not-whatsapp-f05e3.firebaseapp.com',
	projectId: 'not-whatsapp-f05e3',
	storageBucket: 'not-whatsapp-f05e3.appspot.com',
	messagingSenderId: '250540821200',
	appId: '1:250540821200:web:2156c9761bbc6e48a6acd5',
	measurementId: 'G-T44FL5JTR1'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, provider, db, analytics };
export default getFirestore();
