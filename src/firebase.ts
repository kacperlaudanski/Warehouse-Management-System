import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJzj05lrUaAJkRfQH4Wc4A2F7HXS8PyPE",
  authDomain: "warehouse-management-sys-ada13.firebaseapp.com",
  projectId: "warehouse-management-sys-ada13",
  storageBucket: "warehouse-management-sys-ada13.appspot.com",
  messagingSenderId: "868801644085",
  appId: "1:868801644085:web:39b5d091f3b8b5a8cb937c"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 