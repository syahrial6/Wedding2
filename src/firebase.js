// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs,addDoc} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8s4F-fg1GP_Dd7lj9Q9PQbm6gP0rwdtQ",
  authDomain: "wedding-cdd52.firebaseapp.com",
  projectId: "wedding-cdd52",
  storageBucket: "wedding-cdd52.appspot.com",
  messagingSenderId: "95643978996",
  appId: "1:95643978996:web:78c8438c28446c094fa2a1",
  measurementId: "G-MDGBKGV17S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const data = getFirestore(app);

export const getData = async () => {
    const response = await getDocs(collection(data, "ucapan"))
    const response2 = []
    response.forEach(data => {
       response2.push(data.data())
    });
    return response2

}


export const tambahdata = async (objek) => {
    const docRef = await addDoc(collection(data, "ucapan"), objek);
    return docRef
}


