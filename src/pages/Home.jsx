// hooks
import { useCollection } from "../hooks/useCollection";

// useGlobalContext
import { useGlobalContext } from "../hooks/useGlobalContext";

//components
import HomeForms from "../components/HomeForms";
import BooksList from "../components/BooksList";

function Home() {
  const { user } = useGlobalContext();

  const { data: books } = useCollection("books", ["uid", "==", user.uid]);

  return (
    <div className="custom-container flex flex-col md:flex-row gap-x-20 gap-y-[10px] min-h-screen mt-5">
      {/* Home forms */}
      <div className="flex-[0.5] md:flex-1">
        <HomeForms />
      </div>

      {/* Home cards */}
      <div className="flex flex-[2]">
        <BooksList books={books} />
      </div>
    </div>
  );
}

export default Home;
