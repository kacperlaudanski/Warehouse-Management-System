import Main from "./Main";
import Input from "../components/Input";
import { Search } from "lucide-react";
import CustomizedTables from "../layouts/Orders/HistoryTable";

export default function OrdersHistory() {
  return (
    <Main>
      <div className="w-full h-auto bg-white rounded-tl-3xl rounded-bl-3xl p-8 overflow-hidden">
        <div className="w-full h-14 flex justify-between items-center border-solid  border-b-2 py-10 mb-8">
          <h1 className="text-2xl tracking-wider">Orders - History</h1>
          <div className="w-64 h-15 flex justify-center items-center border-solid border-black border-2 rounded-2xl text-neutral-400">
            <Search />
            <Input type="search" variant="search" placeholder="Search..." />
          </div>
        </div>
        <div className="w-full">
           <CustomizedTables />
        </div>
      </div>
    </Main>
  );
}
