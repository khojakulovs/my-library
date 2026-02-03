import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

export const useSignout = () => {
  const signOutUser = () => {
    signOut(auth)
      .then(() => toast.success("Ko'rishguncha jigar!"))
      .catch((error) => toast.error(error.message));
  };

  return { signOutUser };
};
