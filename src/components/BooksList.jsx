// React Icons
import { FaTrash } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

// useFirestore
import { useFirestore } from "../hooks/useFireStore";

function BooksList({ books }) {
  const { deleteDocument } = useFirestore();

  return (
    <div className="w-full mt-5">
      {books &&
        books.map((book) => {
          return (
            <div
              className="card rounded-md bg-base-200 shadow-md mb-4 px-6 py-3"
              key={book.id}
            >
              <div className="flex flex-row justify-between items-center">
                <div className="flex gap-1 md:gap-2 items-center">
                  <FaBook className="text-[20px] md:text-2xl" />
                  <h3 className="text-[20px] md:text-2xl font-semibold">
                    {book.name}
                  </h3>
                </div>

                <h3 className="text-[18px] md:text-[20px] font-semibold">
                  {book.price.toLocaleString()} so'm
                </h3>
                <span
                  onClick={() => deleteDocument(book.id)}
                  className="trash cursor-pointer"
                >
                  <FaTrash className="text-[14px]" />
                </span>
              </div>
              <p className="mt-3 mb-2">{book.title}!</p>
            </div>
          );
        })}
    </div>
  );
}
export default BooksList;
