import Main from "./Main";
import Stillage from "../layouts/Warehouse/Stillage";
import SectionsList from "../layouts/Warehouse/SectionsList";
import Button from "../components/Button";
import SectionUsage from "../components/Warehouse/SectionUsage";

export default function WarehousePreview() {
  return (
    <Main>
      <div className="w-full h-screen flex">
        <div className="w-9/12 h-full flex flex-col bg-white rounded-3xl p-8 pb-16 shadow-[7px_0px_7px_0px_#00000024] z-20">
          <h1 className="text-2xl tracking-wider">Warehouse | Preview</h1>
          <div className="w-full h-2/4 pt-4">
            <h2 className="text-xl tracking-wider mt-4">Section 2</h2>
            <div className="w-full h-4/5 mt-4 grid grid-rows-2 grid-cols-4 grid-flow-col gap-1 place-items-center">
              <Stillage />
              <Stillage />
              <Stillage />
              <Stillage />
              <Stillage />
              <Stillage />
              <Stillage />
              <Stillage />
            </div>
          </div>
          <div className="w-full h-2/4 pt-4">
            <h2 className="text-xl tracking-wider">List of sections</h2>
            <div className="w-full h-full mt-4 mb-6">
              <SectionsList />
            </div>
          </div>
        </div>
        <div className="w-3/12 flex flex-col justify-center items-center z-10 p-4">
          <div className="w-11/12 h-2/6 rounded-xl box-border p-4 pb-8 bg-blue-800 relative overflow-hidden">
            <div className="absolute w-80 h-96 bg-blue-600 rounded-full rotate-45 -right-40 bg-opacity-40 top-0"></div>
            <h3 className="text-lg tracking-wider text-white m-0">
              Section 2 usage
            </h3>
            <SectionUsage />
          </div>
          <div className="w-full h-3/6 flex flex-col justify-around rounded-xl box-border p-4">
            <Button action="relocate" variant="pendingArea">
              Pending Area
            </Button>
            <Button action="relocate" variant="returnArea">
              Returns Area
            </Button>
          </div>
        </div>
      </div>
    </Main>
  );
}
