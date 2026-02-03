import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

// useGlobalContext
import { useGlobalContext } from "./useGlobalContext";

export const useFirestore = () => {
  const { user } = useGlobalContext();

  // Add Document
  const addDocument = (name, price, title) => {
    addDoc(collection(db, "books"), name, price, title)
      .then(() => toast.success("Muvaffaqiyatli qo'shildi!"))
      .catch((error) => toast.error(error.message));
  };

  // Delete Document
  const deleteDocument = (id) => {
    deleteDoc(doc(db, "books", id))
      .then(() => toast.success("Muvaffaqiyatli o'chirildi"))
      .catch((error) => toast.error(error.message));
  };

  return { addDocument, deleteDocument };
};
