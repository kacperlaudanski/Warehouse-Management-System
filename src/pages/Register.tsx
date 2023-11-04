import { useReducer, useState } from "react";
import { Switch } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import joinClasses from "../utilities/joinClasses";
import Input from "../components/Input";
import Button from "../components/Button";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { registerReducer } from "../reducers/register-reducer";
import { INITIAL_STATE } from "../reducers/register-reducer";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(registerReducer, INITIAL_STATE);

  function firstNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "FIRSTNAME", payload: event.target.value });
  }

  function lastNameHandler(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "LASTNAME", payload: event.target.value });
  }

  function emailHandler(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "EMAIL", payload: event.target.value });
  }

  function passwordHandler(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "PASSWORD", payload: event.target.value });
  }

  function phoneNumberHandler(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: "PHONE_NUMBER", payload: event.target.value });
  }

  function registerHandler() {
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Sign Up
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Create an account
        </p>
      </div>
      <form className="mx-auto mt-10 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <Input
                variant="form"
                type="text"
                name="first-name"
                id="first-name"
                onChange={firstNameHandler}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <Input
                variant="form"
                type="text"
                name="last-name"
                id="last-name"
                onChange={lastNameHandler}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <Input
                variant="form"
                type="email"
                name="email"
                id="email"
                onChange={emailHandler}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2.5">
              <Input
                variant="form"
                type="password"
                name="password"
                id="password"
                onChange={passwordHandler}
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <Input
                variant="form"
                type="tel"
                name="phone-number"
                id="phone-number"
                onChange={phoneNumberHandler}
                required
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={joinClasses(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={joinClasses(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <Button action="register" type='button' onClick={registerHandler}>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
