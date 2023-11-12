import { Progress, Badge } from "flowbite-react";

export default function SectionListElement() {
  return (
    <li className="w-full h-1/5 flex justify-between items-center bg-sky-100 py-2 px-4 rounded-lg">
      <h3>Section 001</h3>
      <Badge color='failure'>Used</Badge>
      <div className="w-1/4">
        <Progress progress={34} />
      </div>
      <div>20%</div>
    </li>
  );
}
