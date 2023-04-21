// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,ref, update, onValue} from "firebase/database";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUFWlx-gD7AjQON2jIH_Z4MaAq8uZVmZI",
  authDomain: "yogatutor-334b2.firebaseapp.com",
  projectId: "yogatutor-334b2",
  storageBucket: "yogatutor-334b2.appspot.com",
  messagingSenderId: "849658348228",
  appId: "1:849658348228:web:c1f8b947d6086d5fa5ff91",
databaseURL: "https://yogatutor-334b2-default-rtdb.asia-southeast1.firebasedatabase.app/"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth= getAuth(app);
export default app;

export function getBestTime(pose, setBestPerform){
  const uid = auth.currentUser.uid;
  console.log(auth.currentUser)
  const path = `users/${uid}/${pose}`;
  console.log(path);
  const dbRef = ref(database, path);
  onValue(dbRef,(s)=>{
    setBestPerform(s.val() || 0)
  })
}
export function getStats( setStats){
  const uid = auth.currentUser.uid;
  console.log(auth.currentUser)
  const path = `users/${uid}`;
  console.log(path);
  const dbRef = ref(database, path);
  onValue(dbRef,(s)=>{
    setStats(s.val() || {})
  })
}

export function updateBestTime(pose,bestTime) {
  const updates = {};
  const uid = auth.currentUser.uid
  updates[`users/${uid}/${pose}`] = bestTime;
  return update(ref(database), updates);
}
