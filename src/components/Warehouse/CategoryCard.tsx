import { useNavigate } from "react-router-dom";
import Button from "../Button";

export default function CategoryCard() {
    const navigate = useNavigate(); 
  return (
    <div className="sm:w-full lg:w-72 h-96 bg-neutral-200 flex flex-col justify-around items-center p-8 rounded-lg">
      <img
        src=""
        alt="category-image"
        className="w-3/4 h-1/3 bg-blue-200"
      ></img>
      <h2 className="text-2xl">Category 1</h2>
      <span className="text-sm">Total items: 320</span>
      <Button orders="complete" onClick={() => navigate('./category')}>Preview</Button>
    </div>
  );
}
