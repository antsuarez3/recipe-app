import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDBwQX8h7hY3c2EBSRXqQmoVr9axlkwaLY',
  authDomain: 'cooking-site-d149e.firebaseapp.com',
  projectId: 'cooking-site-d149e',
  storageBucket: 'cooking-site-d149e.appspot.com',
  messagingSenderId: '393258254290',
  appId: '1:393258254290:web:2d378f535815a784bd920b',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }