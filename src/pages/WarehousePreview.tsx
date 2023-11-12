import Main from "./Main";
import Stillage from "../layouts/Warehouse/Stillage";
import SectionsList from "../layouts/Warehouse/SectionsList";
import Button from "../components/Button";
import { CircularProgress } from "@nextui-org/react";

export default function WarehousePreview() {
  return (
    <Main>
      <div className="w-full h-full flex">
        <div className="w-9/12 h-full flex flex-col bg-neutral-100 rounded-3xl p-8 pb-16 shadow-[7px_0px_7px_0px_#00000024] z-20">
          <h1 className="text-2xl tracking-wider">Warehouse | Preview</h1>
          <div className="w-full h-2/4 pt-4">
            <h2 className="text-xl tracking-wider">Section X</h2>
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
        <div className="w-3/12 h-full flex flex-col justify-between items-center z-10 p-4">
          <div className="w-11/12 h-2/5 rounded-xl box-border p-4 bg-blue-800 relative overflow-hidden">
            <div className="absolute w-80 h-96 bg-blue-600 rounded-full rotate-45 -right-40 bg-opacity-40 top-0"></div>
            <h3 className="text-lg tracking-wider text-white m-0">
              Section X usage
            </h3>
            <div className="flex flex-col justify-center items-center w-full h-full relative z-50">
              <CircularProgress
                classNames={{ svg: "w-32 h-32", value: 'text-2xl text-white'}}
                value={40}
                color="success"
                showValueLabel={true}
              />
                          <div className="w-4/5 flex justify-between">
                <div className="flex flex-col text-sm text-center"><span className="text-white text-opacity-50">Loaded</span><span className="text-neutral-200">19 Shelves</span></div>
                <div className="flex flex-col text-sm text-center"><span className="text-white text-opacity-50">Empty</span><span className="text-neutral-200">65 Shelves</span></div>
            </div>
            </div>

          </div>
          <div className="w-full h-3/5 flex flex-col justify-around rounded-xl box-border p-4 pt-10 ">
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
