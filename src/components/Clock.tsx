import { useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  setInterval(() => {
    setDate(new Date());
  }, 1000);

  function currentDate() {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function currentTime() {
    return date.toLocaleTimeString("en-US");
  }
  return (
    <div className="w-full h-1/3 mb-2 bg-white rounded-2xl flex flex-col items-end justify-center text-right p-2">
      <div className="w-full h-1/5 text-lg m-2 text-neutral-400">
        {currentDate()}
      </div>
      <div className="w-full h-1/5 text-6xl m-2">{currentTime()}</div>
    </div>
  );
}
