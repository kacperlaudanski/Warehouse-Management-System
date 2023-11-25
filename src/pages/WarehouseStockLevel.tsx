import Button from "../components/Button";
import CategoryCard from "../components/Warehouse/CategoryCard";
import Main from "./Main";

export default function WarehouseStockLevel() {
  return (
    <Main>
      <div className="w-full h-auto flex">
        <div className="w-full h-full flex flex-col bg-white rounded-tl-3xl rounded-bl-3xl p-8 pb-16">
          <div className="w-full h-16 border-b-2 border-solid flex justify-between items-center">
            <h1 className="tracking-wider text-2xl">Warehouse - Stock Level</h1>
            <Button action='logout'>Add category </Button>
          </div>
          <div className="w-full h-auto grid auto-rows-auto grid-cols-4 mt-10 gap-7">
            {/*Kategoria - karty*/}
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
      </div>
    </Main>
  );
}
