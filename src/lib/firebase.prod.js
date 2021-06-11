import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDZjWawLpqlTlqDDWZPMEd0rU24Y4Yaz3A',
  authDomain: 'netflix-test-118e9.firebaseapp.com',
  projectId: 'netflix-test-118e9',
  storageBucket: 'netflix-test-118e9.appspot.com',
  messagingSenderId: '118716710543',
  appId: '1:118716710543:web:694e62d0085e8705a83afa'
};

const firebase = Firebase.initializeApp(config);

export { firebase };
