import { initializeApp } from "firebase/app";
import firebaseConfig from '../Firebase/firebase.config'
const FirebaseAuthentication = () =>{
initializeApp(firebaseConfig)
};
export default FirebaseAuthentication;