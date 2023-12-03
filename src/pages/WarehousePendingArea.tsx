import DeliveryCard from "../layouts/Warehouse/DeliveryCard";
import Main from "./Main";

export default function WarehousePendingArea() {
  return (
    <Main>
      <div className="w-full h-auto bg-white p-8 rounded-tl-3xl rounded-bl-3xl flex flex-col overflow-y-hidden overflow-x-hidden">
        <div className="w-full h-16 border-b-2 border-solid flex justify-between items-center">
          <h1 className="tracking-wider text-2xl">Warehouse - Pending Area</h1>
        </div>
        <div className="w-full h-auto grid auto-rows-auto lg:grid-cols-4 sm:grid-cols-1 mt-8">
            <DeliveryCard supplier="Company" deliveryID="74385" address="Example 1" date="11.11.2292"/>
            <DeliveryCard supplier="Company" deliveryID="74385" address="Example 1" date="11.11.2292"/>
            <DeliveryCard supplier="Company" deliveryID="74385" address="Example 1" date="11.11.2292"/>
            <DeliveryCard supplier="Company" deliveryID="74385" address="Example 1" date="11.11.2292"/>
            <DeliveryCard supplier="Company" deliveryID="74385" address="Example 1" date="11.11.2292"/>
            <DeliveryCard supplier="Company" deliveryID="74385" address="Example 1" date="11.11.2292"/>
        </div>
      </div>
    </Main>
  );
}
