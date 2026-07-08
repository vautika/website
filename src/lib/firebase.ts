import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDyJfGCbYiIZBzdoPb1AbeOyX1vZLzXivE",
  authDomain: "vautika-website.firebaseapp.com",
  projectId: "vautika-website",
  storageBucket: "vautika-website.firebasestorage.app",
  messagingSenderId: "1070276059162",
  appId: "1:1070276059162:web:b868fbac65100334e131a3",
  measurementId: "G-SEF4NN25RM"
}

// Initialize Firebase for Next.js SSR compatibility
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)

export { db }
