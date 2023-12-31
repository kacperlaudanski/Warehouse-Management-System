import Button from "../components/Button";
import Main from "./Main";
import StockLevelTable from "../layouts/Warehouse/StockLevelTable";
import SearchBar from "../components/SearchBar";

export default function WarehouseStockLevel() {
  return (
    <Main>
      <div className="w-full h-auto flex">
        <div className="w-full h-auto flex flex-col bg-white rounded-tl-3xl rounded-bl-3xl p-8 pb-16">
          <div className="w-full h-16 border-b-2 border-solid flex justify-between items-center">
            <h1 className="tracking-wider text-2xl">Category</h1>
            <SearchBar /> 
          </div>
          <div className="w-full mt-10">
            <StockLevelTable /> 
          </div>
        </div>
      </div>
    </Main>
  );
}
