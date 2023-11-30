import SearchBar from "../components/SearchBar";
import DeliveryTable from "../layouts/Deliveries/DeliveryTable";
import Main from "./Main";

export default function Deliveries() {
  return (
    <Main>
      <div className="w-full h-auto bg-white p-8 rounded-tl-3xl rounded-bl-3xl flex flex-col overflow-y-hidden overflow-x-hidden">
        <div className="w-full h-16 border-b-2 border-solid flex justify-between items-center">
          <h1 className="tracking-wider text-2xl">Deliveries</h1>
          <SearchBar />
        </div>
        <div className="w-full h-auto mt-10">
            <DeliveryTable />
        </div>
      </div>
    </Main>
  );
}
