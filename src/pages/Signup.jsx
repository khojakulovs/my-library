// react
import { useState } from "react";
// react-hot-toast
import toast from "react-hot-toast";
// react-router-dom
import { Link } from "react-router-dom";
// useSignup
import { useSignup } from "../hooks/useSignup";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useSignup();
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      return toast.error("Iltimos, cho'ntakdan ketsa ham to'ldiring!");
    }

    // signup
    signup(name, email, password);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex imgWrapper min-h-screen items-center justify-center">
      <div className="wrapper bg-transparent w-[260px] md:max-w-[420px] md:w-full rounded-[10px] py-[20px] px-[30px]">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-semibold text-3xl">
            Ro'yxatdan o'tish
          </h1>

          {/* Name Input */}
          <div className="input-box">
            <input
              type="text"
              placeholder="Ism"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          {/* Email Input */}
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          {/* Parol Input */}
          <div className="input-box">
            <input
              type="password"
              placeholder="Parol"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="btn btn-primary w-full text-[16px] rounded-[40px] shadow-sm">
            Register
          </button>
          {/* Register */}
          <div className="register-link text-center mt-3">
            <p>
              Accountingiz bormi?{" "}
              <Link to={"/login"} className="font-semibold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
