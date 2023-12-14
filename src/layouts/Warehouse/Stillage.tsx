import { useState } from "react";

export default function Stillage() {
  const [isVisible, setVisibility] = useState(false);
  return (
    <>
      <div className="w-48 h-20 grid grid-rows-2 grid-cols-4 grid-flow-col gap-1">
        <div
          className="w-full h-full bg-emerald-100 text-center rounded-md border-solid border-2 border-emerald-300 relative"
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <div
            className={`w-24 h-24 z-50 bg-sky-100 absolute ${
              !isVisible && `hidden`
            }`}
          >
          </div>
        </div>
        <div
          className="w-full h-full bg-emerald-100 text-center rounded-md border-solid border-2 border-emerald-300"
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <div
            className={`w-48 h-48 z-50 bg-sky-100 absolute t-0 l-0 ${
              !isVisible && `hidden`
            }`}
          ></div>
        </div>
        <div
          className="w-full h-full bg-emerald-100 text-center rounded-md border-solid border-2 border-emerald-300"
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <div
            className={`w-48 h-48 z-50 bg-sky-100 absolute t-0 l-0 ${
              !isVisible && `hidden`
            }`}
          ></div>
        </div>
        <div
          className="w-full h-full bg-emerald-100 text-center rounded-md border-solid border-2 border-emerald-300"
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <div
            className={`w-48 h-48 z-50 bg-sky-100 absolute t-0 l-0 ${
              !isVisible && `hidden`
            }`}
          ></div>
        </div>
        <div
          className="w-full h-full bg-emerald-100 text-center rounded-md border-solid border-2 border-emerald-300"
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <div
            className={`w-48 h-48 z-50 bg-sky-100 absolute t-0 l-0 ${
              !isVisible && `hidden`
            }`}
          ></div>
        </div>
        <div
          className="w-full h-full bg-emerald-100 text-center rounded-md border-solid border-2 border-emerald-300"
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <div
            className={`w-48 h-48 z-50 bg-sky-100 absolute t-0 l-0 ${
              !isVisible && `hidden`
            }`}
          ></div>
        </div>
        <div
          className="w-full h-full bg-emerald-100 text-center rounded-md border-solid border-2 border-emerald-300"
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <div
            className={`w-48 h-48 z-50 bg-sky-100 absolute t-0 l-0 ${
              !isVisible && `hidden`
            }`}
          ></div>
        </div>
        <div
          className="w-full h-full bg-emerald-100 text-center rounded-md border-solid border-2 border-emerald-300"
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <div
            className={`w-48 h-48 z-50 bg-sky-100 absolute t-0 l-0 ${
              !isVisible && `hidden`
            }`}
          ></div>
        </div>
      </div>
    </>
  );
}
