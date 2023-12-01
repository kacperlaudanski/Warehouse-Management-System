import Main from "./Main";
import HistoryOrders from "../layouts/Orders/HistoryTable";
import SearchBar from "../components/SearchBar";

export default function OrdersHistory() {
  return (
    <Main>
      <div className="w-full h-auto bg-white rounded-tl-3xl rounded-bl-3xl p-8 overflow-hidden">
        <div className="w-full h-14 flex justify-between items-center border-solid  border-b-2 py-10 mb-8">
          <h1 className="text-2xl tracking-wider">Orders - History</h1>
          <SearchBar />
        </div>
        <div className="w-full">
           <HistoryOrders />
        </div>
      </div>
    </Main>
  );
}
