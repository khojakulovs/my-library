// react-router-dom
import { Link } from "react-router-dom";

// react
import { useState } from "react";

// toast
import toast from "react-hot-toast";

// useLogin
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // login
  const { login } = useLogin();

  // handleSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      return toast.error("Iltimos, cho'ntakdan ketsa ham to'ldiring!");
    }

    // login
    login(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex imgWrapper min-h-screen items-center justify-center">
      <div className="wrapper bg-transparent w-[260px] md:max-w-[420px] md:w-full rounded-[10px] py-[20px] px-[30px] shadow-md">
        <form onSubmit={onSubmit}>
          <h1 className="text-center font-semibold text-3xl">Login</h1>

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
          <button className="btn text-[16px] btn-primary w-full rounded-[40px] shadow-sm">
            Login
          </button>
          {/* Register */}
          <div className="register-link text-center mt-3">
            <p>
              Accountingiz yo'qmi?{" "}
              <Link to={"/signup"} className="font-semibold hover:underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
