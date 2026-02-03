//firebse
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

// react
import { useEffect, useRef, useState } from "react";

export const useCollection = (collName, _q) => {
  const [data, setData] = useState(null);

  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, collName);
    
    if (q) {
      ref = query(collection(db, collName), where(...q));
    }
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const dataFromCollection = [];
      querySnapshot.forEach((doc) => {
        dataFromCollection.push({ id: doc.id, ...doc.data() });
      });

      setData(dataFromCollection);
    });

    return () => unsubscribe();
  }, [collName, q]);

  return { data };
};
