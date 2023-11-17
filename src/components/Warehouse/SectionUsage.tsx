import { CircularProgress } from "@nextui-org/react";

export default function SectionUsage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full relative z-50">
      <CircularProgress
        classNames={{ svg: "w-32 h-32", value: "text-2xl text-white" }}
        value={40}
        color="success"
        showValueLabel={true}
      />
      <div className="w-4/5 flex justify-between">
        <div className="flex flex-col text-sm text-center">
          <span className="text-white text-opacity-50">Loaded</span>
          <span className="text-neutral-200">19 Shelves</span>
        </div>
        <div className="flex flex-col text-sm text-center">
          <span className="text-white text-opacity-50">Empty</span>
          <span className="text-neutral-200">65 Shelves</span>
        </div>
      </div>
    </div>
  );
}
