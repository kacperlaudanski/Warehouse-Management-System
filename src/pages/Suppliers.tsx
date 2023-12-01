import SearchBar from "../components/SearchBar";
import SuppliersTable from "../layouts/Suppliers/SuppliersTable";
import Main from "./Main";

export default function Suppliers() {
  return (
    <Main>
      <div className="w-full h-auto bg-white p-8 rounded-tl-3xl rounded-bl-3xl flex flex-col overflow-y-hidden overflow-x-hidden">
        <div className="w-full h-16 border-b-2 border-solid flex justify-between items-center">
          <h1 className="tracking-wider text-2xl">Suppliers</h1>
          <SearchBar />
        </div>
        <div className="w-full h-auto mt-10">
            <SuppliersTable />
        </div>
      </div>
    </Main>
  );
}
