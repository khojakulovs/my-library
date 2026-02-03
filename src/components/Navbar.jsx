//react-icons
import { RiBookShelfFill } from "react-icons/ri";

//react-router dom
import { Link, NavLink } from "react-router-dom";

// useGlobalContext
import { useGlobalContext } from "../hooks/useGlobalContext";

//hooks
import { useSignout } from "../hooks/useSignOut";

function Navbar() {
  const { user } = useGlobalContext();
  const { signOutUser } = useSignout();

  return (
    <header className="bg-base-200 shadow-md">
      <div className="custom-container flex justify-between items-center">
        <div className="flex items-center gap-[7px]">
          <Link>
            <RiBookShelfFill className="text-[35px]" />
          </Link>
          <h1 className="text-[30px] font-semibold">Tokcha</h1>
        </div>

        {user && (
          <div className="flex items-center gap-4 text-[18px]">
            <span className="hidden md:block"> {user.email}</span>
            <img
              width={45}
              height={45}
              className="rounded-full hidden md:block profil-img"
              src="https://picsum.photos/400"
              alt="foto"
            />
            <button onClick={signOutUser} className="custom-btn">
              Chiqish
            </button>
          </div>
        )}

        {!user && (
          <div className="flex items-center gap-4">
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/signup"}>Signup</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
