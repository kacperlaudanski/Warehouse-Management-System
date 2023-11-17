import { Progress, Badge } from "flowbite-react";

interface Section {
  name: string;
  isOccupied: boolean;
  fillPercentage: number;
}
export default function SectionListElement({
  name,
  isOccupied,
  fillPercentage,
}: Section) {
  return (
    <li className="w-full h-1/5 flex justify-between items-center bg-sky-100 py-2 px-4 rounded-lg">
      <h3>{name}</h3>
      <Badge color={isOccupied ? "failure" : "success"}>
        {isOccupied ? "Used" : "Empty"}
      </Badge>
      <div className="w-1/4">
        <Progress
          progress={fillPercentage}
          color={
            fillPercentage < 30
              ? "green"
              : fillPercentage >= 30 && fillPercentage < 90
              ? "yellow"
              : "red"
          }
        />
      </div>
      <div>{fillPercentage} %</div>
    </li>
  );
}
