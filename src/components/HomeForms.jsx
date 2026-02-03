// react
import { useState } from "react";

// useFirestore
import { useFirestore } from "../hooks/useFireStore";

// toast
import toast from "react-hot-toast";

// useGlobalContext
import { useGlobalContext } from "../hooks/useGlobalContext";

function HomeForms() {
  const { addDocument } = useFirestore();
  // useStates
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");

  const { user } = useGlobalContext();
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !price.trim() || !title.trim()) {
      return toast.error("Iltimos, Cho'ntakdan ketsa ham to'ldiring!");
    }

    // addDocument
    addDocument({ name, price: Number(price), title, uid: user.uid });

    setName("");
    setPrice("");
    setTitle("");
  };
  return (
    <div className="flex flex-col ">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center text-[26px] font-semibold mt-2">
          Kitob qo'shish
        </h1>

        {/* Name Input */}
        <div className="input-box">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Nomi..."
            className="input input-primary"
          />
        </div>

        {/* Price Input */}
        <div className="input-box">
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="Narxi..."
            className="input input-primary "
          />
        </div>

        {/* Title Input */}
        <div className="input-box ">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            placeholder="Mazmuni..."
            className="input input-primary"
          />
        </div>

        {/* Submit Btn */}
        <button className="btn btn-primary w-full rounded-[40px]">
          Qo'shish
        </button>
      </form>
    </div>
  );
}

export default HomeForms;
