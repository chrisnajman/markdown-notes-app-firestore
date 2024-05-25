import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

// BEGIN your firebaseConfig
const firebaseConfig = {
  /* 
    config code
  */
}
// END your firebaseConfig

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
