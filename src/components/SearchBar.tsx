import { Search } from "lucide-react";
import Input from "./Input";

export default function SearchBar() {
  return (
    <div className="sm:w-56 lg:w-64 h-15 flex justify-center items-center border-solid border-neutral-500 border-2 rounded-2xl text-neutral-400">
      <Search />
      <Input type="search" variant="search" placeholder="Search..." />
    </div>
  );
}
