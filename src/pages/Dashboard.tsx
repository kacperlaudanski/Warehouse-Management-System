import Main from "./Main";

export default function Dashboard() {
  return (
    <Main>
      <div className="w-full h-full bg-neutral-100 rounded-tl-3xl rounded-bl-3xl p-8 overflow-hidden">
        <div className="w-full h-14 border-b-2 border-solid border-neutral-300">
          <h1 className="text-2xl tracking-wider">Dashboard</h1>
        </div>
        <div className="w-full h-full flex justify-around items-center">
          <div className="w-3/5 h-4/5 flex flex-col justify-between items-center">
            <div className="w-full h-2/4 grid grid-rows-1 grid-cols-3 grid-flow-col gap-2 mb-2">
              <div className="h-full bg-blue-200 rounded-2xl p-4"></div>
              <div className="h-full bg-blue-200 rounded-2xl p-4"></div>
              <div className="h-full bg-blue-200 rounded-2xl p-4"></div>
            </div>
            <div className="w-full h-full rounded-2xl bg-blue-200 mt-2"></div>
          </div>
          <div className="w-2/6 h-4/5 flex flex-col justify-between items-center">
            <div className="w-full h-2/6 mb-2 bg-blue-200 rounded-2xl"></div>
            <div className="w-full h-4/6 mt-2 bg-blue-200 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </Main>
  );
}
