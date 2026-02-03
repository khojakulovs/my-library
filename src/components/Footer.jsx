// react-icons
import { RiBookShelfFill } from "react-icons/ri";

function Footer() {
  return (
    <section className="bg-neutral mt-5">
      <footer className="custom-container flex justify-center items-center gap-x-3 py-4">
        <RiBookShelfFill className="text-2xl" />
        <div>
          © {new Date().getFullYear()} Samandar Khojakulov.{" "}
          <span className="">Barcha huquqlar himoyalangan.</span>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
