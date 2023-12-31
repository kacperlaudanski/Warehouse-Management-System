import Button from "../components/Button";
import Input from "../components/Input";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  function emailHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function passwordHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function loginHandler() {
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        dispatch({ type: "LOGIN", payload: cred.user})
        navigate("/main")
      })
      .catch((err) => {
        console.log(false)
      });
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-36 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="text-3xl text-center">LOGO</h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <Input
                  variant="form"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={emailHandler}
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-red-400 hover:text-red-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  variant="form"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={passwordHandler}
                  required
                />
              </div>
            </div>
            <div>
              <Button action="login" type='button' onClick={loginHandler}>
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
