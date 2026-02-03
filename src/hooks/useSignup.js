//firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

import { useGlobalContext } from "./useGlobalContext";

export const useSignup = () => {
  const { dispatch } = useGlobalContext();

  const signup = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //Reducer func
        dispatch({ type: "LOGIN", payload: user });
        toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
        console.log(user);
      })
      
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);

        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return { signup };
};
